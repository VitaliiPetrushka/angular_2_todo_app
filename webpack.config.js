var path = require("path");
var webpack = require("webpack");

module.exports = {
   entry: {
      main: [path.normalize(path.join(__dirname, "app/main.ts"))]
   },
   output: {
      path: path.join(__dirname, "app/"),
      publicPath: "/",
      filename: "[name].js"
   },
   module: {
      loaders: [
         {
            test: /\.ts$/,
            loader: "ts",
            exclude: /node_modules/
         },
         {
            test: /\.scss$/,
            loaders: ["style", "css","sass"],
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      extensions: ['', '.js', '.ts']
   }
};