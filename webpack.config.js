const path = require('path');
const webpack = require('webpack');
var isProduction = process.argv.indexOf('production') > 0;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/css.css');
const extractLESS = new ExtractTextPlugin('css/less.css');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        path.resolve(__dirname, "./src/index.tsx")
    ],
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname + "/public/dist/"),
        publicPath: '/dist/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: isProduction ? false : "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        port: 8000,
        host: 'localhost',
        hot: true,
        // 以下信息可有可无，为了完整
        inline: true,
        historyApiFallback: true,
        noInfo: false,
        // stats: 'minimal',
        publicPath: "/dist/",
        // layy:true,
        filename: "js/bundle.js",
        compress: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/ags': {
                target: 'https://localhost',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/ags': ''
                }
            }
        }
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["config.js", ".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
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
                loader: "url-loader?limit=10000&name=dist/fa/[hash].[ext]&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=dist/fa/[hash].[ext]"
            }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: [{},
     ],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./public/dist/js/vendor-manifest.json")
        }),
        //css和less输出
        extractCSS,
        extractLESS,

    ].concat(!isProduction ? [
        new webpack.HotModuleReplacementPlugin(),
        // // 开启全局的模块热替换(HMR)
        new webpack.NamedModulesPlugin()
    ] : [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 生产环境用
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    ]),

};