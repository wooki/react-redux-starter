const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET

var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  devtool: '#eval-source-map',
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader"),
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      }
    ]
  },
  postcss: function () {
      return [precss, autoprefixer];
  },
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: 'errors-only',
    port: process.env.PORT,
    host: process.env.HOST
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'React Redux Starter'
    }),
     new ExtractTextPlugin("styles.css")
  ]
};
