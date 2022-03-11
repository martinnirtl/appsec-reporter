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

const extractEntityInformation = (entity) => {
  const type = entity.entityId.split('-')[0]

  return {
    entityDisplayName: entity.displayName,
    entityDetectedName: entity.properties.detectedName,
    hostId: getHostId(type, entity),
  }
}

export const getSecurityProblems = async (tenant?: string | null, token?: string | null) => {
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
    async ({ securityProblemId }: { securityProblemId: number }) => {
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
      ...extractEntityInformation(entity),
    };
  }))).filter(e => e.status === 'fulfilled').map(e => e.value)

}