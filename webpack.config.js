var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
              "@babel/preset-env",
              {
                useBuiltIns: "entry",
                // caller.target will be the same as the target option from webpack
                targets: { ie: "11" }
              }
            ]
          ]
          }
        }
      }
    ]
  },
  output: {
    environment: {
      arrowFunction: false, // <-----
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};