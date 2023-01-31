/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file?name=[path][name].[ext]',
            options: {
              outputPath: path.join(__dirname, 'src/img'),
            },
            // loader: 'file-loader',
            // options: {
            //   outputPath: 'img',
            // },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/views/commonSection.html'),
      filename: 'commonSection.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/views/main.html'),
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/views/statistics.html'),
      filename: 'statistics.html'
    }),
  ],
  optimization: {
    minimize: false,
  },
};
