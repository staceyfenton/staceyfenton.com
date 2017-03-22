var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    app: [
      './src/js/main.js',
      './src/scss/styles.scss',
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
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
    new ExtractTextPlugin('styles.css'),

    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
};


if(inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}