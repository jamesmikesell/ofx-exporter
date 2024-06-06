const path = require('path');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, 'src'),
  // devtool: "inline-source-map",
  entry: {
    main: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "[name]-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};