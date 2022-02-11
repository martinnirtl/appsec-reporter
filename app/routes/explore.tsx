import { MetaFunction, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import Navbar from '~/components/navbar';
import { getComputedSecurityProblems } from '~/helpers/dynatrace';
import Table from '~/components/table/table';

export const meta: MetaFunction = () => {
  return { title: 'AppSec Explorer' };
};

export let loader: LoaderFunction = async () => {
  return getComputedSecurityProblems();
};

export default function Index() {
  const data = useLoaderData();

  const columns = Object.keys(data[0]);

  return (
    <>
      <Navbar></Navbar>
      <div className="section">
        <div style={{ height: '100vh' }}>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
