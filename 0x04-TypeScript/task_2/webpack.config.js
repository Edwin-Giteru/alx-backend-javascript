const path = require("path");

module.exports = {
    mode: "development",
  entry: "./js/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: "ts-loader",
            options: {
                configFile: "tsconfig.json"
            }
        },
        exclude: /node_modules/
      }
    ]
  }
};
