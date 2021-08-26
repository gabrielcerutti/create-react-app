# cra-template-microfrontend-typescript

This is the Micro-Frontend TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

It's using [React App Rewired](https://www.npmjs.com/package/react-app-rewired) and [React Router](https://reactrouter.com/) (with nested routes) to create a very simple and lightweight Micro-Frontend app to be loaded from a [Container App](https://github.com/gabrielcerutti/main-spa) (aka Main SPA).

## What is a micro-frontend approach?

The term micro front-ends came up the last couple of years, check out this article from the [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/techniques/micro-frontends). It extends the concepts of microservices to front-end development.
The approach is to split the browser-based code into micro front-ends by breaking down application features. By making smaller and feature-centered codebases, we achieve the software development goal of decoupling.
Although the codebases are decoupled, the user experiences are coherent. In addition, each codebase can be implemented, upgraded, updated, and deployed independently.

> **Note:** Pay special attention to the global nature of the web, all the script and styles are attached to the same DOM, so you could face issues if this is not handled properly. In order to avoid collisions in styles it's recommended to use sass or some css-in-js approach. This is out of the scope and you can use whatever you find better for your project.

To use this template, add `--template microfrontend-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template microfrontend-typescript

# or

yarn create react-app my-app --template microfrontend-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
- [Main SPA](https://github.com/gabrielcerutti/main-spa) - How to create a Container App.
