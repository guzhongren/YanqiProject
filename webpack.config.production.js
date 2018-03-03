const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    endor: ['bootstrap/dist/css/bootstrap.min.css', 'reactstrap','semantic-ui-react','semantic-ui-css/semantic.min.css'],
    app: './src/index.js'
  },
  output: {
    // We want to create the JavaScript bundles under a 
    // 'static' directory
    filename: 'static/[name].[hash].js',
    // Absolute path to the desired output directory. In our 
    //case a directory named 'dist'
    // '__dirname' is a Node variable that gives us the absolute
    // path to our current directory. Then with 'path.resolve' we 
    // join directories
    // Webpack 4 assumes your output path will be './dist' so you 
    // can just leave this
    // entry out.
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // Change to production source maps
  devtool: 'source-map',
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
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    
    // Create the stylesheet under 'styles' directory
    new ExtractTextPlugin({
      filename: 'styles/styles.[contenthash].css',
      allChunks: true
    })
  ]
};