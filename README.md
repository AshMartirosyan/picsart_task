# README.md

This project is an SSR React application. The main tools used are React, Express, and Webpack.

## Project Setup

The project uses `yarn` for package management. `Node` version should be 20 or higher.

### Install packages

1. `yarn install`

After this step, everything is ready to run the project

### Run and build

1. Run in development mode - `yarn dev`
2. Create a production build  - `yarn build`
3. Run the production build - `yarn start`

## Project structure

1. The main directory is `src`
2. The `webpack` directory contains webpack config files for server and client.
    * `log-assets.mjs` uses for logging bundle report after build`
3. Project uses atomic design pattern, so in `src/component`, you can find three main directories: `atom`, `molecule`, `organism`.
4. For state management project uses `Context Api`. All context stored into `src/context` directory.
5. `src/hooks` contains all custom hooks.
6. As the project is written with Typescript, all global models are located in the `src/models directory.`
7. For routing project uses `react-router-dom`. All route configurations and pages are stored in the `src/pages` directory.
8. The `src/theme` directory contain all global styles.
9. The `src/utils` directory contain all helper functions and types.
10. `App.tsx` is the main app.
11. `client.tsx` and `server.tsx` contains configurations for the server and client sides, respectively.

## Project main aspects

### Webpack

For bundle optimization and chunk splitting, the project uses webpack.

1. For translating `TypeScript` to `JavaScript`, Babel is used.
2. For minifying JavaScript, `TerserWebpackPlugin` is used.
3. For compression, `CompressionWebpackPlugin` is used.

After the build ends, Webpack creates a `build` directory. Inside `build`,there are 4 main directory:

* `js`- for split chunks.
* `public`  - contains the same public folder from the main directory, with index.html created by `HtmlWebpackPlugin`.
* `server` - contains the output of the server Webpack build.
* `vendors` - contains chunks of node modules.

### Server

1. For development mode, app uses Webpack Dev Server.
2. For production mode, a custom server created with Express.js is used.
3. For  SSR, `renderToPipeableStream` from `react-dom/server` is used to stream already rendered HTML to the client side.

### Client

1. For attaching React code to already rendered HTML,`hydrateRoot` from `react-dom/client` is used.
2. For api requests and data caching, `React Query` with `axios` is used.
3. For styling, `styled-components` is used.
4. For form handling and validation, `react-hook-form` with `yup` is used.
