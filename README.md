# Krakenjs-angular2

A `kraken-js` example application using `angular2`.

This application adds the Angular2 features only at the client side. For angular2 server side rendering (universal angular2), please check out other examples.

## Features

- `kraken-js` at the server side to serve data (mostly serves Ajax requests from client).
- Clear separation of server and client code base
- Illustrates Angular2 Services using Github APIs and In-memory database services
- Illustrates Angular2 Routing.
- Examples of Angular2 user input, forms and two-way binding.
- Uses `webpack` instead of the `systemjs` (angular2 recommended) as the module loader.
- `SASS` stylesheet extension and webpack sass loader integration.
- `Webpack` dev middleware configurations for JiT compilations and HMR (Hot Module Reload).

## Pre-requisites

- Node version should be v6+
- NPM version should be 3+

## Usage

```sh

    > git clone https://github.com/subeeshcbabu/krakenjs-angular2.git
    > cd krakenjs-angular2
    > npm i
    > npm run typings install (If typings are not installed by default)
    > npm start (This executes, npm run build && node server. tsc && webpack are executed as part of npm run build)

```

Application can be accessible at http://localhost:8000


## Project skeleton

#### Server (kraken-js app)

- **/config/** - Application and middleware configuration
- **/controllers/** - Application routes
- **/models/** - Controller models
- **/inmemorydb/** - In-Memory DB configurations.
- **/test/** - Unit and functional test cases
- **/index.js** - Application entry point
- **/server.js** - Server file to start the application

#### Client (Angular2 app)

- **/client/** - Client side code base directory
- **/client/app** - Angular2 app code
- **/web/index.html** - Angular2 client app entry point
- **/bundle/** - Directory for generated resources (js, css etc) for environments other than development.

#### Webpack

- **/webpack.config.js/** - `Webpack` module loaded config file.
- **/webpack-util/** - `Webpack` Utilities including dev config, `webpack-dev-middleware` and `webpack-hot-middleware` configurations.

#### TypeScript

- **/tsconfig.json/** - `TypeScript` config file. Defines how the TypeScript compiler generates JavaScript from the project's files.
- **/typings.json/** - provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
- **/typings/** - Generated typings definition files by running `typings install`
