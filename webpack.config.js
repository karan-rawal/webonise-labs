// Require the libraries
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Some config variables
const DISTRIBUTION_DIRECTORY_PATH = './dist';
const SOURCE_DIRECTORY_PATH = './src';

// Resolved absolute path
const DIST_DIR_RESOLVED = Path.resolve(__dirname, DISTRIBUTION_DIRECTORY_PATH);
const SRC_DIR_RESOLVED = Path.resolve(__dirname, SOURCE_DIRECTORY_PATH);

/* ***WEBPACK CONFIGURATIONS*** */

// Entry config
const entry = `${SRC_DIR_RESOLVED}/js/main.js`;

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
];

// resolve config
const resolve = {
  extensions: ['.js'],
};

const config = {
  entry,
  output,
  devtool,
  devServer,
  plugins,
  resolve,
};

module.exports = config;
