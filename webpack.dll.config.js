const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom'
      // core dependencies
    ]
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // to export in js
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // name
      path: path.join(__dirname, '[name]-manifest.json') // reference to libraries
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  }
}
