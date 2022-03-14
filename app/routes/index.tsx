import classNames from 'classnames';
import { ChangeEventHandler, useState } from 'react'
import { LoaderFunction, useLoaderData } from 'remix';
import { useLocalStorage } from '~/helpers/hooks';

export let loader: LoaderFunction = async () => {
  const splitToken = process.env.DT_TENANT?.split('.');

  let token = '';
  if (splitToken?.length === 3) {
    token = splitToken.slice(0, 1).join();
  }

  return {
    tenantUrl: process.env.DT_TENANT || 'https://xxxxxxxx.live.dynatrace.com',
    token,
    configuredFromBackend: !!process.env.DT_TENANT && !!process.env.DT_TOKEN,
  }
};

export default function Index() {
  const { tenantUrl, configuredFromBackend } = useLoaderData();

  const [tenant, setTenant] = useLocalStorage('dt_tenant', tenantUrl);
  const [token, setToken] = useLocalStorage('dt_token', '');
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const [file, setFile] = useState<string | null>(null);
  const [message, setMessage] = useState<string | undefined>()

  const updateTenant: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setTenant(e.target.value);
  }

  const updateToken: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setToken(e.target.value);
  }

  const generateReport = async () => {
    if (!configuredFromBackend && (!tenant || !token)) {
      setMessage('Please configure tenant and token!')

      return
    } else {
      setMessage(undefined)
    }

    setLoadingState(true);
    const res = await fetch(`/_generate?tenant=${tenant}&token=${token}`)
    const fileBlob = await res.blob()

    const fileUrl = URL.createObjectURL(fileBlob)

    setFile(fileUrl);
    setLoadingState(false);
  }

  return (
    <div className="is-flex is-justify-content-center is-align-items-center" style={{ height: '100vh' }}>
      <div className="p-5" style={{ width: '800px' }}>
        <h1 className="title">AppSec Reporter</h1>
        <h2 className="subtitle">Generate security reports based on Dynatrace Application Security</h2>
        <p className="">
          Dynatrace{' '}
          <a href="https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security">
            Application Security
          </a>{' '}
          enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities
          in production and pre-production environments at runtime.
        </p>
        <p className="is-size-6 has-text-weight-semibold mt-4">
          The generated CSV-file will use <span className="has-text-weight-bold">;</span> as delimiter and requires the following token scopes:
        </p>
        <div className="tags are-small mt-1">
          <a className="tag is-info is-light">Read security problems</a>
          <a className="tag is-info is-light">Read entities</a>
        </div>
        <div className="mt-4">
          <div className="field">
            {/* <label className="label">Dynatrace Tenant</label> */}
            <div className="control">
              <input className="input is-small" type="text" placeholder="Dynatrace Tenant" onChange={updateTenant} value={tenant} disabled={configuredFromBackend} />
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Dynatrace Token</label> */}
            <div className="control">
              <input className="input is-small" type="password" placeholder="Dynatrace Token" onChange={updateToken} value={token} disabled={configuredFromBackend} />
            </div>
            {configuredFromBackend && <p className="help is-success">Dynatrace tenant and token are configured on the backend.</p>}
          </div>
          <div className="field">
            <div className="control">
              <a className={classNames('button', 'is-info', 'is-fullwidth', { 'is-loading': isLoading })} onClick={generateReport}>
                {file ? 'Regenerate' : 'Generate CSV Report'}
              </a>
            </div>
            {message && <p className="help is-danger">{message}</p>}
          </div>
          {file &&
            <div className="field">
              <div className="control">
                <a className={classNames('button', 'is-success', 'is-fullwidth')} href={file} download={`appsec-report_${new Date().toISOString().slice(0, 10)}.csv`}>
                  Download CSV Report
                </a>
              </div>
            </div>
          }
          <p className="help">
            Need help? Reach out to <a href="mailto:martin.nirtl@dynatrace.com">martin.nirtl@dynatrace.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
