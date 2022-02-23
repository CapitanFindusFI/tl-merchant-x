const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "source-map",
  devServer: {
    port: 4000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js",
  },
};
