const path = require("path");
const webpack = require("webpack");
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: [
            "react",
            "react-dom"
        ]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname + "/public/dist/"),
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|gif|woff|ico|cur)$/,
                loader: 'url-loader?limit=1500&name=images/[hash:6].[ext]'
            },
            // fonts
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=dist/fa/[hash].[ext]&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=dist/fa/[hash].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery', jQuery: 'jquery'
        }),
        new webpack.DllPlugin({
            context:__dirname,
            name: '[name]',
            path: path.join(__dirname, 'public', 'dist', "js", '[name]-manifest.json')
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
}