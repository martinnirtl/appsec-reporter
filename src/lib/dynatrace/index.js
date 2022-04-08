import { Parser } from 'json2csv';

const getHostId = (type, entity) => {
  switch (type) {
    case 'HOST':
      return entity.entityId;

    case 'KUBERNETES_NODE':
      return entity.fromRelationships.isNodeOfHost[0].id;

    case 'PROCESS_GROUP_INSTANCE':
      return entity.fromRelationships.isProcessOf[0].id;

    default:
      return 'UNSUPPORTED ENTITY TYPE';
  }
}

const extractEntityInformation = async (entity, { API_BASE, API_TOKEN }) => {
  const type = entity.entityId.split('-')[0]
  const hostId = getHostId(type, entity)

  let hostName;
  if (hostId) {
    const res = hostId ? await fetch(API_BASE + hostId, { method: 'GET', headers: { 'Authorization': `Api-Token ${API_TOKEN}` } }) : null;
    const hostEntity = await res.json();

    hostName = hostEntity.displayName
  }

  return {
    entityDisplayName: entity.displayName,
    entityDetectedName: entity.properties.detectedName,
    hostId,
    hostName,
  }
}

export const getSecurityProblems = async (tenant, token) => {
  const SECURITY_PROBLEMS_API = `${tenant || process.env.DT_TENANT}/api/v2/securityProblems?pageSize=500`;
  const SECURITY_PROBLEMS_DETAILS_API = `${tenant || process.env.DT_TENANT}/api/v2/securityProblems/`;
  const FIELDS = '%2BriskAssessment%2C%2BmanagementZones%2C%2Bdescription%2C%2Bevents%2C%2BvulnerableComponents%2C%2BaffectedEntities%2C%2BexposedEntities%2C%2BreachableDataAssets%2C%2BrelatedEntities%2C%2BrelatedContainerImages'
  const ENTITY_DETAILS_API = `${tenant || process.env.DT_TENANT}/api/v2/entities/`;

  const securityProblemsList = [];
  let nextPageKey = '';
  do {
    const res = await fetch(nextPageKey ? `${SECURITY_PROBLEMS_API}&nextPageKey=${nextPageKey}` : SECURITY_PROBLEMS_API, { method: 'GET', headers: { 'Authorization': `Api-Token ${token || process.env.DT_TOKEN}` } });
    const body = await res.json();

    securityProblemsList.push(...body.securityProblems);

    nextPageKey = body.nextPageKey;
  } while (!!nextPageKey);

  const detailedSecurityProblemsList = (await Promise.allSettled(securityProblemsList.map(
    async ({ securityProblemId }) => {
      const res = await fetch(SECURITY_PROBLEMS_DETAILS_API + securityProblemId + `?fields=${FIELDS}`, { method: 'GET', headers: { 'Authorization': `Api-Token ${token || process.env.DT_TOKEN}` } });
      const p = await res.json();

      return p;
    }
  ))).filter(e => e.status === 'fulfilled').map(e => e.value)

  let idCount = 0;
  const extendedSecurityProblemsList = detailedSecurityProblemsList.reduce((list, p, i) => {
    const flattenedProblems = p.vulnerableComponents.reduce((entityList, component, j) => {
      entityList.push(...component.affectedEntities.map(entity => ({
        id: ++idCount,
        displayId: p.displayId,
        securityProblemId: p.securityProblemId,
        entityId: entity,
        title: p.title,
        description: p.description,
        type: p.vulnerabilityType,
        technology: p.technology,
        package: p.packageName,
        component: component.displayName,
        status: p.status,
        riskLevel: p.riskAssessment.riskLevel,
        riskScore: p.riskAssessment.riskScore,
        exposed: p.riskAssessment.exposure !== "NOT_AVAILABLE" ? 'yes' : 'no',
        dataAssets: p.riskAssessment.dataAssets !== "NOT_AVAILABLE" ? 'yes' : 'no',
        publicExploit: p.riskAssessment.publicExploit !== "NOT_AVAILABLE" ? 'yes' : 'no',
        muted: p.muted ? 'yes' : 'no',
        internalLink: p.url,
        // TODO change to array which holds link text and href
        externalLink: p.externalVulnerabilityId?.startsWith('SNYK') ? `https://security.snyk.io/vuln/${p.externalVulnerabilityId}` : '-',
        // cveIds: p.cveIds,
        firstSeen: new Date(p.firstSeenTimestamp).toUTCString(),
        lastUpdated: new Date(p.lastUpdatedTimestamp).toUTCString(),
      })))

      return entityList;
    }, []);

    list.push(...flattenedProblems)

    return list
  }, []);

  return (await Promise.allSettled(extendedSecurityProblemsList.map(async p => {
    const res = await fetch(ENTITY_DETAILS_API + p.entityId, { method: 'GET', headers: { 'Authorization': `Api-Token ${token || process.env.DT_TOKEN}` } })
    const entity = await res.json();

    return {
      ...p,
      ...(await extractEntityInformation(entity, { API_BASE: ENTITY_DETAILS_API, API_TOKEN: token || process.env.DT_TOKEN })),
    };
  }))).filter(e => e.status === 'fulfilled').map(e => e.value)
}

export const generateReport = async (tenant, token) => {
  captureTenantUrlAsUserTag(tenant);

  const fields = [
    { label: 'ID', value: 'id' },
    { label: 'Dynatrace ID', value: 'displayId' },
    // { label: 'Security Problem ID', value: 'securityProblemId' },
    { label: 'Entity ID', value: 'entityId' },
    { label: 'Entity Name', value: 'entityDisplayName' },
    { label: 'Title', value: 'title' },
    // { label: 'Description', value: 'description' },
    { label: 'Type', value: 'type' },
    { label: 'Technology', value: 'technology' },
    { label: 'Package', value: 'package' },
    { label: 'Component', value: 'component' },
    { label: 'Status', value: 'status' },
    { label: 'Risk Level', value: 'riskLevel' },
    { label: 'Risk Score', value: 'riskScore' },
    { label: 'Exposed', value: 'exposed' },
    { label: 'Data Assets', value: 'dataAssets' },
    { label: 'Public Exploit', value: 'publicExploit' },
    { label: 'Muted', value: 'muted' },
    { label: 'First seen', value: 'firstSeen' },
    { label: 'Last updated', value: 'lastUpdated' },
    { label: 'Host ID', value: 'hostId' },
    { label: 'Host Name', value: 'hostName' },
    { label: 'Dynatrace Link', value: 'internalLink' },
    { label: 'External Link', value: 'externalLink' },
    { label: 'Entity Name (detected)', value: 'entityDetectedName' },
  ]

  const problems = await getSecurityProblems(
    tenant.endsWith('/') ? tenant.slice(0, -1) : tenant,
    token
  );

  const customParser = new Parser({
    fields,
    defaultValue: '-',
    delimiter: ';',
    header: true,
    // excelStrings: true,
  });

  return customParser.parse(problems);
};

const captureTenantUrlAsUserTag = tenant => {
  try {
    if (window && window.dtrum) {
      window.dtrum.identifyUser(tenant);
    }
  } catch (e) {
    console.error(e)
  }
}