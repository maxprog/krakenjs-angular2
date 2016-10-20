const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack-util/webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = WebpackMerge(CommonConfig, {
    entry: {
        polyfill: [
            'zone.js',
            'reflect-metadata',
            'rxjs'
        ],
        main: './client/app/main.ts'
    },
    output: {
        filename: './bundle/[name].js'
    },
    plugins: [
        new ExtractTextPlugin('./bundle/[name].css')
    ]
});
