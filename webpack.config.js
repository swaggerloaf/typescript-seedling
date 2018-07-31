const path = require('path');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';


module.exports = {
  mode: "development",

  // starting point
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",

    //publicPath:'/dist'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    }]
  },
  context: __dirname,
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    hot: false,
    port: 8080
  }
}
