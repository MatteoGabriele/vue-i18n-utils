var webpack = require('webpack')
var babel = require('./rules/babel')
var vue = require('./rules/vue')
var pack = require('../package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    path: './dist',
    filename: pack.name + '.js'
  },
  module: {
    rules: [babel, vue]
  },
  plugins: []
}
