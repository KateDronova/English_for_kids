/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: path.join(__dirname, './dist')
  },
  optimization: {
    usedExports: true,
  }
});
