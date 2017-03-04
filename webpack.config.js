var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src'
  ],

  output: {
    path: path.join(__dirname, 'public/assets/js'),
    filename: 'bundle.js',
    publicPath: 'assets/js'
  },
  resolve : {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.json']
  },
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
     historyApiFallback: true
  }

}
