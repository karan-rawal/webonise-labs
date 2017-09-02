// Require the libraries
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Some config variables
const DISTRIBUTION_DIRECTORY_PATH = './dist';
const SOURCE_DIRECTORY_PATH = './src';

// Resolved absolute path
const DIST_DIR_RESOLVED = Path.resolve(__dirname, DISTRIBUTION_DIRECTORY_PATH);
const SRC_DIR_RESOLVED = Path.resolve(__dirname, SOURCE_DIRECTORY_PATH);

/* ***WEBPACK CONFIGURATIONS*** */

// Entry config
const entry = `${SRC_DIR_RESOLVED}/js/main.jsx`;

// Output config
const output = {
  filename: 'js/bundle.js',
  path: DIST_DIR_RESOLVED,
  publicPath: '/',
};

const devtool = 'source-map';

// Dev server config
const devServer = {
  contentBase: DIST_DIR_RESOLVED,
  hot: true,
  inline: true,
  open: true,
};

// Plugins config
const plugins = [
  new Webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: `${SRC_DIR_RESOLVED}/index.html`,
    filename: `${DIST_DIR_RESOLVED}/index.html`,
  }),
  new ExtractTextPlugin('css/style.css'),
];

// Module config (since 'module' keyword is already used in js)
const moduleConfig = {
  rules: [
    // Babel
    {
      test: [/\.jsx?$/, /\.js?$/],
      use: ['babel-loader'],
      exclude: [/node_modules/, /\.spec\.jsx?$/],
    },
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: 'file-loader?name=[name]-[hash].[ext]&outputPath=fonts/&publicPath=../',
    },
    {
      test: /\.(jpg|png|svg)$/,
      use: 'file-loader?name=[name]-[hash].[ext]&outputPath=images/&publicPath=../',
    },
    {
      test: /\.(json)$/,
      use: 'file-loader?name=[name].[ext]&outputPath=json/&publicPath=../',
    },
  ],
};

// resolve config
const resolve = {
  extensions: ['.js', '.jsx'],
};

const config = {
  entry,
  output,
  devtool,
  devServer,
  plugins,
  resolve,
  module: moduleConfig,
};

module.exports = config;
