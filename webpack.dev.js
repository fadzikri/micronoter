const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [new ESLintPlugin(), new StylelintPlugin()],
});
