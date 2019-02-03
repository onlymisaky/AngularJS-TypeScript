const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./loaders');

/**
 * @type {webpack.Configuration}
 */
const webpackCommonConfig = {
  entry: './src/main.ts',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: { rules },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeTagWhitespace: true,
      }
    })
  ]
};

module.exports = webpackCommonConfig;
