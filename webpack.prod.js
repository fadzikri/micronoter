const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const glob = require("glob");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync("./src/styles/*", { nodir: true }),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
});
