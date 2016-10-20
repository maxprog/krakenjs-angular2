const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack-util/webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = WebpackMerge(CommonConfig, {
    entry: {
        vendor: './client/vendor.ts',
        polyfills: './client/polyfills.ts',
        main: './client/app/main.ts'
    },
    output: {
        filename: './bundle/[name].js'
    },
    plugins: [
        new ExtractTextPlugin('./bundle/[name].css'),
        new Webpack.NoErrorsPlugin(),
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
