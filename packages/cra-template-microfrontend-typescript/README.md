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

> So, pay special attention to the global nature of the web, all the script and styles are attached to the same DOM, you could face issues if this is not handled properly. For example, in order to avoid collisions in styles it's recommended to use [_sass_](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) (with a root container element) or some _css-in-js_ approach ([material-ui](https://material-ui.com/) or [styled components](https://styled-components.com/)). This is out of the scope and you can use whatever you find better for your project.

## Mechanism 

In order to integrate a micro-frontend, some changes must be done in the react app, basically expose two function that will be called from the container app:
- **render:** this function will call _ReactDOM.render_ to render the root app component.
- **unMount:** this function will call _ReactDOM.unmountComponentAtNode_ to unmount the root app component and perform any needed cleanup.

This is already setup in the template (take a look to the microfrontend.tsx file). You just have to run the following command to load the app in microfrontend mode.

```sh
npm run start:micro
```

## Usage

To use this template, add `--template microfrontend-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template microfrontend-typescript

# or

yarn create react-app my-app --template microfrontend-typescript
```

## Run the microfrontend

Development mode (localhost:3000 by default). This is the regular react script command. Not need to have the Container App running since the app will be loaded in standalone mode.

```sh
npm start
```

Microfrontend mode (localhost:4000 by default). Use this mode to load the app into the Container App which has to be running.

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
