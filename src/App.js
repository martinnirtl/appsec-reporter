import './App.css'
import classNames from 'classnames';
import { useState } from 'react'
import { useLocalStorage } from './lib/hooks';
import { generateReport } from './lib/dynatrace';

export default function Index() {
  const [tenant, setTenant] = useLocalStorage('dt_tenant', process.env.REACT_APP_DT_TENANT || 'https://xxxxxxxx.live.dynatrace.com');
  const [token, setToken] = useLocalStorage('dt_token', process.env.REACT_APP_DT_TOKEN || '');
  const [isLoading, setLoadingState] = useState(false);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState()

  const updateTenant = (e) => {
    e.preventDefault();
    setTenant(e.target.value);
  }

  const updateToken = (e) => {
    e.preventDefault();
    setToken(e.target.value);
  }

  const generateReportAction = async () => {
    if (!tenant || !token) {
      setMessage('Please configure tenant and token!')

      return
    } else {
      setMessage(undefined)
    }

    setLoadingState(true);
    try {
      const report = await generateReport(tenant, token);
      const fileBlob = new Blob([report])

      const fileUrl = URL.createObjectURL(fileBlob)

      setFile(fileUrl);
    } catch (error) {
      setMessage('Generation failed! Please check the Dynatrace tenant URL and token.')
    } finally {
      setLoadingState(false);
    }
  }

  return (
    <div className="App is-flex is-justify-content-center is-align-items-center">
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
        <p className="is-size-6 has-text-weight-semibold mt-4">Expected URL format:</p>
        <div className="tags are-small mt-1">
          <p className="tag is-info is-light">{"SaaS: https://{your-tenant-id}.live.dynatrace.com"}</p>
          <p className="tag is-info is-light">{"Managed: https://{your-domain}/e/{your-environment-id}"}</p>
        </div>
        <p className="is-size-6 has-text-weight-semibold mt-4">
          Required token scopes:
        </p>
        <div className="tags are-small mt-1">
          <p className="tag is-info is-light">Read security problems</p>
          <p className="tag is-info is-light">Read entities</p>
        </div>
        <p className="is-size-6 has-text-weight-semibold mt-4">
          The generated CSV-file will use <span className="has-text-weight-bold">;</span> as delimiter.
        </p>
        <div className="mt-4">
          <div className="field">
            {/* <label className="label">Dynatrace Tenant</label> */}
            <div className="control">
              <input className="input is-small" type="text" placeholder="Dynatrace Tenant/Environment URL" onChange={updateTenant} value={tenant} />
            </div>
          </div>
          <div className="field">
            {/* <label className="label">Dynatrace Token</label> */}
            <div className="control">
              <input className="input is-small" type="password" placeholder="Dynatrace Token" onChange={updateToken} value={token} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className={classNames('button', 'is-info', 'is-fullwidth', { 'is-loading': isLoading })} onClick={generateReportAction}>
                {file ? 'Regenerate' : 'Generate CSV Report'}
              </button>
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
            Need help? Visit the project on <a href="https://github.com/martinnirtl/appsec-reporter">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}
