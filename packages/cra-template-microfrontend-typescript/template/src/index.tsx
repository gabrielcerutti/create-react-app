import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App basePath="" host="" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you don't want to use react-app-rewired to change the entry point of the app, 
// you can uncomment the code below to add global functions to be able to load the
// micro-frontend from the Container App.
// Check out the repo https://github.com/gabrielcerutti/micro-frontend-y for implementation details.
// One disadvantage of this approach is that you cannot run the app in standalone mode and microfrontend mode at the same time.
/*
declare global {
  interface Window {
    renderYourBrandNewMicrofrontend: (containerId: string, options: MicrofrontendOptions) => void;
  }
  interface Window {
    unMountYourBrandNewMicrofrontend: (containerId: string) => void;
  }
}

window.renderYourBrandNewMicrofrontend = (containerId: string, options: MicrofrontendOptions) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App basePath={options.basePath} host={options.host} {...options.data} />
      </BrowserRouter>
    </React.StrictMode>,
    container
  );
  console.log(`Micro-frontend ${containerId} mounted`);
};

window.unMountYourBrandNewMicrofrontend = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
  console.log(`Micro-frontend ${containerId} unmounted`);
};
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
