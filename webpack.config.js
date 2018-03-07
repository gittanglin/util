const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const argv = require('yargs').argv;
const NODE_ENV = argv.mode;


const NODE_ENV_CONFIG = {
  DEV: 'development',
  PROD: 'production'
};


let commonConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
  },
  devtool: NODE_ENV == NODE_ENV_CONFIG.DEV ? 'inline-source-map' : 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: NODE_ENV == NODE_ENV_CONFIG.DEV ? '[name].[hash].js' : '[name].js',
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', "postcss-loader"],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "sass-loader", "postcss-loader"]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/png'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
    }
  },
  optimization: {
    splitChunks: {
      chunks: "initial"
    }
  },
};

const prodConfig = {};

const devConfig = {
  devServer: {
    port: 8082,
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    //404定位到index.html
    historyApiFallback: true,
    //代理
    proxy: {
      '/api/*': "http://localhost:8090/$1"
    }
  }
};


let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'src/index.html'),
  }),
  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(NODE_ENV),
  }),
];

if (NODE_ENV == NODE_ENV_CONFIG.PROD) {
  plugins.push(new CleanWebpackPlugin(['dist']))
}


commonConfig.plugins = plugins;

module.exports = Object.assign(NODE_ENV == NODE_ENV_CONFIG.DEV ? devConfig : prodConfig, commonConfig);
