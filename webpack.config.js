const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const argv = require('yargs').argv;
const NODE_ENV = argv.mode;


const NODE_ENV_CONFIG = {
  DEV: 'development',
  PROD: 'production'
};


module.exports = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
  },
  devtool: NODE_ENV == NODE_ENV_CONFIG.DEV ? 'inline-source-map' : 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: NODE_ENV == NODE_ENV_CONFIG.DEV ? 'index.min.js' : 'index.min.js',
    chunkFilename: '[name].[chunkhash:5].js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
      }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
