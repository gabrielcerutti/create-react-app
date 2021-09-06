# cra-template-microfrontend-typescript

This is the Micro-Frontend TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

It's using [React App Rewired](https://www.npmjs.com/package/react-app-rewired) and [React Router](https://reactrouter.com/) (with nested routes) to create a very simple and lightweight Micro-Frontend app to be loaded into a Container App. Check out the demo [Container App](https://github.com/gabrielcerutti/main-spa) (aka Main SPA).

## What is a micro-frontend approach?

The term micro front-ends came up the last couple of years, check out this article from the [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/techniques/micro-frontends). It extends the concepts of microservices to front-end development.
The approach is to split the browser-based code into micro front-ends by breaking down application features. By making smaller and feature-centered codebases, we achieve the software development goal of decoupling.
Although the codebases are decoupled, the user experiences are coherent. In addition, each codebase can be implemented, upgraded, updated, and deployed independently.

![image.png](/diagram_1.png)

_Image credit to [Jennifer Fu](https://jenniferfubook.medium.com/). Check out the great article Jennifer wrote about [how to turn a react app into a micro-frontend](https://betterprogramming.pub/5-steps-to-turn-a-random-react-application-into-a-micro-frontend-946718c147e7)._

> **Note:** In the micro-frontend architecture, globals have to be carefully controlled. Globals doesn’t only refer to variables or state, but it can also include things such as window/document event handlers, persistent network connections, anything that can be actively running despite the app no longer being in the DOM. It can be incredibly easy to forget that these things can leak, and that they require proper tear downs.

> So, pay special attention to the global nature of the web, all the script and styles are attached to the same DOM, you could face issues if this is not handled gracefully. For example, in order to avoid collisions in styles it's recommended to use [_sass_](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) (with a root container element) or some _css-in-js_ approach ([material-ui](https://material-ui.com/) or [styled components](https://styled-components.com/)). This is out of the scope and you can use whatever you find better for your project.

## Mechanism 

In order to integrate a micro-frontend, some changes must be done in the react app, basically expose two function that will be called from the container app:
- _**render(containerId, history, data):**_ this function will call _ReactDOM.render_ to render the root app component.
- _**unMount(containerId):**_ this function will call _ReactDOM.unmountComponentAtNode_ to unmount the root app component and perform any needed cleanup.

It is possible to subscribe/unsubscribe from the Container App to events dispatched from the micro-frontend with the functions listed below:
- _**subscribe(event, eventHandler)**_
- _**unSubscribe(event, eventHandler)**_

Take a look to the _microfrontend.tsx_ file in the project src folder.

To be able to execute the functions listed above, it's necessary to change the entry point of the react app, in order to achieve it there is a file _config-overrides.js_ in the project root required by [React App Rewired](https://www.npmjs.com/package/react-app-rewired).

```javascript
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.entry = {
      main: [path.resolve('.', 'src', 'microfrontend.tsx')],
    };
    config.output.library = 'YourBrandNewMicrofrontend';
    config.output.libraryTarget = 'window';
    return config;
  },
};
```
Here you can setup some options like:
- The **entry point** with the property _config.entry_.
- To generate an **optimized** or **not optimized** build with the property _config.optimization.runtimeChunk and config.optimization.splitChunks_.
- The **Id** and **build mode** of the micro-frontend with the property _config.output.library and config.output.libraryTarget_ (needed in the Container App). If you don't want to use this mode, you have to expose specific named functions in the _microfrontend.tsx_ file instead of generic ones to be called from the Container App, for example _renderYourNewMicrofrontend(...)_ instead of just _render(...)_. Then, of course, you have to setup the Container App accordingly to load the micro-frontend depending on what is the chosen mode here.

> **Note:** You don't have to use React App Rewired if you don't need or don't want to override the default configuration. Of course, there are advantages and disadvantages on doing that. Check out the commented code in the _index.tsx_ file for more info.

## Usage

To use this template, add `--template microfrontend-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template microfrontend-typescript

# or

yarn create react-app my-app --template microfrontend-typescript
```

## Run the microfrontend

Development mode _(localhost:3000 by default)_. This is the regular react script command. Not need to have the Container App running since the app will be loaded in standalone mode.

```sh
npm start
```

Microfrontend mode _(localhost:4000 by default)_. Use this mode to load the app into the Container App which has to be running.

```sh
npm run start:micro
```

## Build the microfrontend

```sh
npm run build:micro
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
- [Main SPA](https://github.com/gabrielcerutti/main-spa) - How to create a Container App.
