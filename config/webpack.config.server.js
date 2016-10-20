const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PATHS = {
  server: path.resolve(__dirname, '../server'),
  dist: path.resolve(__dirname, '../public'),
  modules: path.resolve(__dirname, '../node_modules')
}

module.exports = {

  entry: PATHS.server,

  output: {
    path: PATHS.dist,
    filename: 'index.js'
  },

  // resolve: {
  //   alias: {
  //     components: PATHS.components
  //   }
  // },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(PATHS.modules)
    .reduce(function (ext, mod) {
      ext[mod] = 'commonjs ' + mod
      return ext
    }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  eslint: {
    configFile: './config/.eslintrc.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel', 'eslint' ]
      }
    ]
  }

}
