var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var nodeModules = {};


fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  target: 'node',
  devtool: 'eval-source-map',
  entry: [
    './server.js'
  ],

  output: {
    path: __dirname,
    filename: 'server.bundle.js'
  },
  resolve : {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }

}
