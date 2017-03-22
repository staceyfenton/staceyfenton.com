var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    app: [
      './src/js/main.js',
      './src/scss/styles.scss',
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};