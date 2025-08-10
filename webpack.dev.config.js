// --mode development
const { SourceMapDevToolPlugin } = require('webpack');
// const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // contentBase: baseWebpackConfig.externals.paths.dist,
  devServer: {
    static: __dirname, // baseWebpackConfig.externals.paths.dist   __dirname
    port: 8082,
    open: false,
    compress: true,
  },
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
