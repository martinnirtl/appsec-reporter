import { MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { useTable, useSortBy, useGroupBy, useExpanded } from 'react-table';
import { useMemo } from "react";

import Navbar from "~/components/navbar";
import { getComputedSecurityProblems } from "~/helpers/dynatrace";

export const meta: MetaFunction = () => {
  return { title: "AppSec Explorer" };
};

export let loader: LoaderFunction = async () => {
  return getComputedSecurityProblems();
};

export default function Index() {
  const loadedData = useLoaderData();
  // console.log(JSON.stringify(loadedData, null, 2))

  const cols = Object.keys(loadedData[0]);

  const columns = useMemo(()=> [
    {
      // Build our expander column
      id: 'expander', // Make sure it has an ID
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
        <span {...getToggleAllRowsExpandedProps()}>
          {isAllRowsExpanded ? '👇' : '👉'}
        </span>
      ),
      Cell: ({ row }) =>
        // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
        // to build the toggle for expanding a row
        row.canExpand ? (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                // We can even use the row.depth property
                // and paddingLeft to indicate the depth
                // of the row
                paddingLeft: `${row.depth * 2}rem`,
              },
            })}
          >
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ) : null,
    },
    ...cols.map(c => ({ Header: c, accessor: c }))
    // { Header: 'status', accessor: 'status' },
    // { Header: 'displayId', accessor: 'displayId' },
    // { Header: 'technology', accessor: 'technology' },
    // { Header: 'muted', accessor: 'muted' },
    // { Header: 'title', accessor: 'title' },
  ], []);

  const data = useMemo(()=> loadedData, []);

  // return (
  //   <div>
  //     {JSON.stringify(data[0], null, 2)}
  //   </div>
  // )
  

  // { 
  //   "securityProblemId": "5483054569056927519", 
  //   "displayId": "S-1", 
  //   "status": "OPEN", 
  //   "muted": false, 
  //   "externalVulnerabilityId": "SNYK-DOTNET-SYSTEMDIRECTORYSERVICESPROTOCOLS-1730569", 
  //   "vulnerabilityType": "THIRD_PARTY", 
  //   "title": "Credential Exposure", 
  //   "packageName": "System.DirectoryServices.Protocols", 
  //   "url": "https://wkp84055.live.dynatrace.com/ui/security/problem/5483054569056927519", 
  //   "technology": "DOTNET", 
  //   "firstSeenTimestamp": 1640075155527, 
  //   "lastUpdatedTimestamp": 1644523436060, 
  //   "cveIds": [ "CVE-2021-41355" ], 
  //   "muteStateChangeInProgress": false
  // }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded }
  } = useTable(
    { 
      columns, 
      data 
    },
    useGroupBy, 
    useSortBy,
    useExpanded,
  );

  // const firstPageRows = rows.slice(0, 20)

  return (<>
      <Navbar></Navbar>
    <div className="section">
      <div style={{ height: '100vh' }}>
      {/* <pre>
        <code>{JSON.stringify({ groupBy, expanded }, null, 2)}</code>
      </pre> */}
      <div className="table-container">
        <table className="table is-fullwidth is-hoverable" {...getTableProps()}>
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? '🛑 ' : '👊 '}
                    </span>
                  ) : null}
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  );
}
