const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/view/index.html",
      favicon: "./favicon.ico",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
