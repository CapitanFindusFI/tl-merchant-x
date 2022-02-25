
# TL Challenge Frontend
This project has been made using [Webpack](https://webpack.js.org/), [React](https://reactjs.org/) with [Typescript](https://www.typescriptlang.org/), [Redux toolkit](https://redux-toolkit.js.org/) for state management, [Axios](https://github.com/axios/axios) to handle API calls, [React i18n](https://react.i18next.com/) for internationalization, [StyledComponents](https://styled-components.com/) for styling and [Cypress](https://www.cypress.io/) for testing. 

## Project structure
All React files are located into the `src` folder, comprehensive of the application root `app.tsx`, React bootstrapping `index.tsx`, i18n initialization `i18n.ts` and a global styling `styles.ts`.

All components are located inside `/components` folder, usually coming with an `index.tsx` containing the component itself, a `styles.ts` containing the component style rules and a `index.test.tsx` test file for Cypress component testing. Also, `index.tsx` provides a `PropsType` type which describes React props that can be passed through.

 - `/layout` folder contains simple React Components to define a page layout;
 - `/translations` contains .json files with translated text being used with `i18n`;
 - `/store` for Redux store init and its reducers;
 - `/lib` actually contains `api.ts` for Axios instance creation;
- `/types` for type definitions.

## How to run it
As is comes with a Dockerfile, it can be built and run using Docker.
Express server is being exposed by default on port 6556 which can be changed (following next)

```
docker build . -t your_image_name
docker run docker run -p 4001:6556 your_image_name
```
There is also a handy makefile which can be used for both operations. Issuing `make build-and-run` in your terminal will execute the docker commands above with a default image name of `tl-pokemon-backend:local`

You can check if it's running by visiting `http://localhost:6556` (or the port you've chosen), server should answer with a welcome message.

### Running tests
All tests are using Cypress, both for component testing and e2e testing.

#### Component testing
Component testing will run tests inside `/src` folder, which means tests written for a specific component only.

Can be run using
```
npm run test
```

#### E2E Testing
E2E testing will run tests inside `cypress/integration` folder, which needs a running server. By default, Cypress `baseUrl` defined inside `cypress.json` will be `http://localhost:4000`.

Can be run using
```
npm run serve
npm run cy:open
```

Or with `npm run cy:open` while the application frontend is running within Docker.

## How to run it
As is comes with a Dockerfile, it can be built and run using Docker. it's composed by a multi-stage build compiling Typescript with node, and then copying compiled files in a nginx-based container.

The result of the build will be a nginx container serving files from its root directory defined inside `nginx.conf`

```
docker build . -t your_image_name
docker run -p HOST_PORT:80 your_image_name
```

By default, nginx will listen on port 80 so Dockerfile also exposes port 80

There is also a handy makefile which can be used for both operations. Issuing `make build-and-run` in your terminal will execute the docker commands above with a default image name of `tl-pokemon-frontend:local`

Using makefile by default will use port 4000 for your frontend, so you can open your browser at `http://localhost:4000` to see the running application

## Available Configuration
While building the image, Node.js will replace defined environment variables (using Webpack's DefinePlugin).

Currently there are these environment variables **available only at build time.**

| Variable Name | Default value         |
|---------------|-----------------------|
| API_URL       | `http://0.0.0.0:4001` |