# Krakenjs-angular2

A `kraken-js` example application using `angular2`.

This application adds the Angular2 features only at the client side. For angular2 server side rendering (universal angular2), please check out other examples.

## Features

- `kraken-js` at the server side to serve data (mostly for Ajax requests from client).
- Uses `webpack` instead of the angular2 recommended `systemjs` as the module loader.
- Clear separation of server and client code base
- `SASS` stylesheet extension and webpack sass loader integration.

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

```sh

├── README.md
├── client
│   ├── app
│   │   ├── app.component.js
│   │   ├── app.component.js.map
│   │   ├── app.component.ts
│   │   ├── app.module.js
│   │   ├── app.module.js.map
│   │   ├── app.module.ts
│   │   ├── main.js
│   │   ├── main.js.map
│   │   └── main.ts
│   └── index.html
│  
├── config
│   ├── config.json
│   └── development.json
├── controllers
│   └── index.js
├── index.js
├── models
│   └── index.js
├── package.json
├── routes
│   └── index.js
├── server.js
├── test
│   └── index.js
├── tsconfig.json
├── typings
│   ├── globals
│   │   ├── mocha-node
│   │   └── node
│   └── index.d.ts
├── typings.json
└── webpack.config.js

```

#### Server (kraken-js app)

- **/config/** - Application and middleware configuration
- **/controllers/** - Application routes
- **/models/** - Controller models
- **/test/** - Unit and functional test cases
- **/index.js** - Application entry point
- **/server.js** - Server file to start the application

#### Client (Angular2 app)

- **/webpack.config.js/** - `Webpack` module loaded config file.
- **/tsconfig.json/** - `TypeScript` config file. Defines how the TypeScript compiler generates JavaScript from the project's files.
- **/typings.json/** - provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
- **/typings/** - Generated typings definition files by running `typings install`
- **/client/** - Client side code base directory
- **/client/index.html** - Angular2 client app entry point
- **/client/app** - Angular2 app code
