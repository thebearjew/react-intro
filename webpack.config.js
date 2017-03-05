const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/client/public')
const APP_DIR = path.resolve(__dirname, 'src/js')

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
