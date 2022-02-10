import { FormEventHandler } from "react";

export default function Index() {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="is-flex is-justify-content-center is-align-items-center" style={{ height: '100vh' }}>
      
      <div className="p-5" style={{ width: '800px' }}>
        <h1 className="title has-text-danger">AppSec Reporter</h1>
        <h2 className="subtitle">Generate security reports based on Dynatrace Application Security</h2>
        <p className="">Dynatrace <a href="https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security">Application Security</a> enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities in production and pre-production environments at runtime.</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="field">
            <div className="select is-fullwidth">
              <select>
                <option>Select a report</option>
                <option>Report A</option>
              </select>
            </div>
          </div>
          <div className="field">
              <button className="button is-danger is-fullwidth" type="submit" value="Submit">Generate</button>
          </div>
          <p className="help">Need help? Reach out to <a href="mailto:martin.nirtl@dynatrace.com">martin.nirtl@dynatrace.com</a></p>
        </form>
      </div>
    </div>
  );
}
