// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: [
    "./src/index.js",
    "./src/inquiry.js",
    "./src/introduction.js",
    "./src/link.js",
    "./src/platform.js",
    "./src/privacy.js",
    "./src/supply.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: false,
    host: "localhost",
  },
  cache: false,
  stats: {
    children: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      // "output:" で指定したディレクトリを空にする
      cleanOnceBeforeBuildPatterns: "**/*",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "introduction.html"),
      filename: "introduction.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "link.html"),
      filename: "link.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "platform.html"),
      filename: "platform.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "privacy.html"),
      filename: "privacy.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "supply.html"),
      filename: "supply.html",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  watchOptions: {
    ignored: "/node_modules/",
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
