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
    'index': './src/index.js'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.join(__dirname, 'node_modules'),
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}
