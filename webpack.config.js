module.exports = {
    entry: {
        polyfill: [ './node_modules/zone.js', './node_modules/reflect-metadata', './node_modules/rxjs' ],
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
            }
            // ,
            // {
            //    loaders: ['style', 'css'],
            //    test: /\.css$/,
            //    exclude: /\.useable\.css$/
            // }
       ]
    }
};
