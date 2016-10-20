const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

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
                test: /\.html$/,
                loader: 'html'
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
    },
    htmlLoader: {
        root: Path.resolve(__dirname, 'client/app')
    }
};
