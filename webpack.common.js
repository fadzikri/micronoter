const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/scripts.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/index.html",
      favicon: "./favicon.ico",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
