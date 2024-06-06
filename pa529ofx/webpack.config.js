const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = (env) => {
  return {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    devtool: "inline-source-map",
    entry: {
      main: "./index.ts",
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: "[name]-pa529.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "../index.html",
        minify: true
      }),
      new CopyPlugin({
        patterns: [
          { from: "../favicons", to: "favicons" },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    }
  }
};