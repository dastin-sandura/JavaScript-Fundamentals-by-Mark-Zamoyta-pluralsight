const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  }
});
