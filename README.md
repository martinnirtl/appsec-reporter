<p align="center">
  <br/>
  <a href="https://martinnirtl.github.io/appsec-reporter/"><img src="https://raw.githubusercontent.com/martinnirtl/appsec-reporter/master/docs/img/ui.png" width="600px"></a>
</p>

# AppSec Reporter
Generate security reports based on Dynatrace Application Security!

Dynatrace [Application Security](https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security) enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities in production and pre-production environments at runtime.

## Usage

The AppSec Reporter is hosted on Github Pages: https://martinnirtl.github.io/appsec-reporter/

Before you can start generating reports, you need to meet the following two prerequisites:
- Dynatrace tenant/environment URL
- Dynatrace access token for the respective tenant/environment with the following permissions: Read security problems (v2), Read entities (v2)

The URL and the token will be automatically stored in your browser only (local storage) and will be securly transmitted over HTTPS.

## Deployment

If you plan to deploy the AppSec Reporter yourself, please refer to the `docker-compose.yaml` and `Dockerfile` in the project's root folder. 
It's possible to preconfigure the app container (NGINX) with URL and token, so that you just need to click `Generate Report`. However, you will most likely want to secure the app by adding some auth in that case.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.