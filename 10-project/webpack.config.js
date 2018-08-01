const path = require('path'), //include built-in pakage for absolute path
    babelPolyfill = require('babel-polyfill'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Entry Point.
    entry: ['babelPolyfill', './src/js/index.js'], //(./mean the current folder)
    //Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    // mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    //Plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    //Loaders
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}