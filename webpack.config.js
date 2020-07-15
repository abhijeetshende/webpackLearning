let path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode:"development",
  devtool:"source-map",
  module: {
    rules: [
      {
        test: /\.scss/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jpeg/i,
        use: ["file-loader"],
      },
      {
        test: /\.js/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              "plugins": ["transform-class-properties"]

            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "hello Rudhresh",
    }),
    new MiniCssExtractPlugin(),
  ],
};
