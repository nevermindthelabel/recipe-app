const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    fileName: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};