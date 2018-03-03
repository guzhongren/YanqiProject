const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;
module.exports = {
  mode: 'development',
  entry: {
    vendor: ['bootstrap/dist/css/bootstrap.min.css', 'reactstrap','semantic-ui-react','semantic-ui-css/semantic.min.css'],
    app: ['react-hot-loader/patch', './src/index.js']
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|gif|woff|ico|cur)$/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'fonts/',
            useRelativePath: true
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2048
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};