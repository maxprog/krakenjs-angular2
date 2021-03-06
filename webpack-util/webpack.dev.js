const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = WebpackMerge(CommonConfig, {
    entry: {
        vendor: [
            './client/vendor.ts',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ],
        polyfills: [
            './client/polyfills.ts',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ],
        app: [
            './client/app/main.ts',
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ]
    },
    output: {
        filename: '[name].js',
        path: '/',
        puplicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // Webpack 1.0
        new Webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ]
});
