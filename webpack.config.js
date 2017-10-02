var webpack = require("webpack")
var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'index.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

}