// const path = require("path");

// const HTMLWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// // const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// const mode = process.argv.includes("serve") ? "development" : "production";
// const prod = mode === "production";

// const target = prod ? "browserslist" : "web";
// const devtool = prod ? false : "source-map";

// module.exports = {
//   mode,
//   target,
//   devtool,

//   optimization: {
//     minimize: prod,
//   },

//   devServer: {
//     open: true,
//     port: 8080,
//     hot: true,
//   },

//   entry: ["@babel/polyfill", "./src/index.js"],
//   // entry: ["@babel/polyfill", "./build/bundle.f934652d0817ae95dc1c.js"],

//   output: {
//     path: path.resolve(__dirname, "build"),
//     clean: true,
//     filename: "bundle.js",
//     assetModuleFilename: "[path][name][ext]",
//   },

//   resolve: {
//     extensions: [".js"],
//   },

//   plugins: [
//     new HTMLWebPackPlugin({ template: "./public/index.html" }),
//     new MiniCssExtractPlugin(),
//     new CleanWebpackPlugin(),
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: "../public",
//           globOptions: {
//             ignore: ["**/index.html"],
//           },
//           noErrorOnMissing: true,
//         },
//       ],
//     }),
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         // exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//             // presets: ["@babel/preset-react"],
//             plugins: [["@babel/plugin-proposal-class-properties"]],
//           },
//         },
//       },
//       {
//         test: /\.(png|jpg|jpeg|svg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.scss$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader",
//             options: {
//               importLoaders: 1,
//               modules: true,
//             },
//           },
//           "postcss-loader",
//         ],
//         include: /\.module\.css$/,
//       },
//       {
//         test: /\.css$/,
//         // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
//         use: ["style-loader", "css-loader"],
//         exclude: /\.module\.css$/,
//       },
//       {
//         test: /\.html$/,
//         use: ["html-loader"],
//       },
//     ],
//   },
// };

//// -----

const path = require("path");

const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const mode = process.argv.includes("serve") ? "development" : "production";
const prod = mode === "production";

//const target = prod ? "browserslist" : "web";
const devtool = prod ? false : "source-map";

module.exports = {
  mode,
  //  target,
  devtool,
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  optimization: {
    minimize: prod,
  },

  devServer: {
    open: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    allowedHosts: "all",
  },

  // context: path.resolve(__dirname, "src"),

  //  entry: ["@babel/polyfill", "./src/index.js"],
  //  // entry: ["@babel/polyfill", "./build/bundle.c7d99004647242b93a04.js"],

  //  output: {
  //    path: path.resolve(__dirname, "dist"),
  //    clean: true,
  //    filename: "index.js",
  //    assetModuleFilename: "[path][name][ext]",
  //  },

  resolve: {
    extensions: [".js"],
  },

  plugins: [
    new HTMLWebPackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
    // new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-proposal-class-properties"]],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "postcss-loader",
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
