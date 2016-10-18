const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfill: [
            './node_modules/zone.js',
            './node_modules/reflect-metadata',
            './node_modules/rxjs'
        ],
        main: './client/app/main.ts'
    },

    output: {
        filename: './client/[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css?sourceMap'])
            }
       ]
    }
    ,
    plugins: [
        new ExtractTextPlugin('./client/[name].css')
    ]
};
