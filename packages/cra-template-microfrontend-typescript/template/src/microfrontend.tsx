import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { eventsToDispatch } from './events';

export interface MicrofrontendOptions {
  basePath: string;
  host: string;
  history: any;
  data: any;
}

export const render = (containerId: string, options: MicrofrontendOptions) => {
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

export const unMount = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
  console.log(`Micro-frontend ${containerId} unmounted`);
};

export const subscribe = (
  eventName: string,
  eventHandler: (this: Window, ev: any) => any
) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.addEventListener(eventName, eventHandler);
};

export const unSubscribe = (
  eventName: string,
  eventHandler: (this: Window, ev: any) => any
) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.removeEventListener(eventName, eventHandler, false);
};

export const customEvents = eventsToDispatch;
