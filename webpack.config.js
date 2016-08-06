var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/main.js',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extenstions: ['', '.js', '.jsx', '.css']
    }
}
