

export const a = async () => {
  const SECURITY_PROBLEMS_API = `${process.env.DT_TENANT}/api/v2/securityProblems?pageSize=500`;
  const SECURITY_PROBLEMS_DETAILS_API = `${process.env.DT_TENANT}/api/v2/securityProblems/`;
  const FIELDS = '%2BriskAssessment%2C%2BmanagementZones%2C%2Bdescription%2C%2Bevents%2C%2BvulnerableComponents%2C%2BaffectedEntities%2C%2BexposedEntities%2C%2BreachableDataAssets%2C%2BrelatedEntities%2C%2BrelatedContainerImages'
  
  const securityProblemsList = [];
  let nextPageKey= ''; 
  do {
    const res = await fetch(nextPageKey ? `${SECURITY_PROBLEMS_API}&nextPageKey=${nextPageKey}` : SECURITY_PROBLEMS_API, { method: 'GET', headers: { 'Authorization': `Api-Token ${process.env.DT_TOKEN}` }});
    const body = await res.json();

    securityProblemsList.push(...body.securityProblems);

    nextPageKey = body.nextPageKey;
  } while(!!nextPageKey);

  return (await Promise.allSettled(securityProblemsList.map(
    async ({ securityProblemId }: { securityProblemId: number }) => {
      const res = await fetch(SECURITY_PROBLEMS_DETAILS_API + securityProblemId + `?fields=${FIELDS}`, { method: 'GET', headers: { 'Authorization': `Api-Token ${process.env.DT_TOKEN}` }});
      const p = await res.json();

      return {
        id: p.displayId,
        status: p.status,
        muted: p.muted ? 'Y' : 'N',
        snykLink: p.externalVulnerabilityId?.startsWith('SNYK') ? `https://security.snyk.io/vuln/${p.externalVulnerabilityId}` : '-',
        // description: p.description,
        firstSeen: p.firstSeenTimestamp,
        lastUpdated: p.lastUpdatedTimestamp,
        riskLevel: p.riskLevel,
        riskScore: p.riskScore,
        // status: p?.status,
      };
    }
  ))).map(e => e.status === 'fulfilled' ? e.value : e.reason);
}



export const getComputedSecurityProblems = async () => {
  const SECURITY_PROBLEMS_API = `${process.env.DT_TENANT}/api/v2/securityProblems?pageSize=500`;
  const SECURITY_PROBLEMS_DETAILS_API = `${process.env.DT_TENANT}/api/v2/securityProblems/`;
  const FIELDS = '%2BriskAssessment%2C%2BmanagementZones%2C%2Bdescription%2C%2Bevents%2C%2BvulnerableComponents%2C%2BaffectedEntities%2C%2BexposedEntities%2C%2BreachableDataAssets%2C%2BrelatedEntities%2C%2BrelatedContainerImages'
  
  const securityProblemsList = [];
  let nextPageKey= ''; 
  do {
    const res = await fetch(nextPageKey ? `${SECURITY_PROBLEMS_API}&nextPageKey=${nextPageKey}` : SECURITY_PROBLEMS_API, { method: 'GET', headers: { 'Authorization': `Api-Token ${process.env.DT_TOKEN}` }});
    const body = await res.json();

    securityProblemsList.push(...body.securityProblems);

    nextPageKey = body.nextPageKey;
  } while(!!nextPageKey);

  const detailedSecurityProblemsList = (await Promise.allSettled(securityProblemsList.map(
    async ({ securityProblemId }: { securityProblemId: number }) => {
      const res = await fetch(SECURITY_PROBLEMS_DETAILS_API + securityProblemId + `?fields=${FIELDS}`, { method: 'GET', headers: { 'Authorization': `Api-Token ${process.env.DT_TOKEN}` }});
      const p = await res.json();

      return p;
    }
  ))).map(e => e.status === 'fulfilled' ? e.value : e.reason);

  let idCount = 0;
  return detailedSecurityProblemsList.reduce((list, p, i) => {
    const flattenedProblems = p.affectedEntities.map((entity) => ({
      id: ++idCount,
      entity,
      status: p.status,
      riskLevel: p.riskAssessment.riskLevel,
      riskScore: p.riskAssessment.riskScore,
      exposed: p.riskAssessment.exposure !== "NOT_AVAILABLE",
      dataAssets: p.riskAssessment.dataAssets !== "NOT_AVAILABLE",
      publicExploit: p.riskAssessment.publicExploit !== "NOT_AVAILABLE",
      muted: p.muted,
      technology: p.technology,
      internalLink: p.url,
      // TODO change to array which holds link text and href
      externalLink: p.externalVulnerabilityId?.startsWith('SNYK') ? `https://security.snyk.io/vuln/${p.externalVulnerabilityId}` : '-',
      // cveIds: p.cveIds,
      firstSeen: p.firstSeenTimestamp,
      lastUpdated: p.lastUpdatedTimestamp,
    }));

    list.push(...flattenedProblems)

    return list
  }, []);
}