const path = require("path");
const webpack = require("webpack");
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/globalCss.css');
const extractLESS = new ExtractTextPlugin('css/globalLess.css');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        vendor: [
            "react",
            "react-dom",
            'bootstrap',
            'jquery',
            'bootstrap/dist/css/bootstrap.min.css',
            'font-awesome/less/font-awesome.less'
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
                use: ["style-loader", "css-loader"],
                use: extractCSS.extract({
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|gif|woff|ico|cur)$/,
                loader: 'url-loader?limit=1500&name=images/[hash:6].[ext]'
            },
            // fonts
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&name=fa/[hash].[ext]&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=fa/[hash].[ext]"
            }
        ]
    },
    plugins: [
        //css和less输出
        extractCSS,
        extractLESS,
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