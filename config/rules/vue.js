const combineLoaders = require('webpack-combine-loaders')

module.exports = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      js: combineLoaders([
        require('./babel')
      ])
    },
    postcss: require('postcss-blue-plugins')(),
    cssModules: {
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
      camelCase: true
    }
  }
}
