import type { LoaderFunction } from "remix";
import { getSecurityProblems } from "~/helpers/dynatrace";
import { Parser } from 'json2csv'

export const loader: LoaderFunction = async ({
  request,
}) => {
  const params = new URL(request.url).searchParams

  const fields = [
    { label: 'ID', value: 'id' },
    { label: 'Dynatrace ID', value: 'displayId' },
    { label: 'Security Problem ID', value: 'securityProblemId' },
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
    { label: 'Dynatrace Link', value: 'internalLink' },
    { label: 'External Link', value: 'externalLink' },
    { label: 'Entity Name (detected)', value: 'entityDetectedName' },
  ]

  const problems = await getSecurityProblems(params.get('tenant'), params.get('token'));

  const customParser = new Parser({
    fields,
    defaultValue: '-',
    delimiter: ';',
    header: true,
  });

  const csv = customParser.parse(problems);

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=UTF-8'
    }
  });
};