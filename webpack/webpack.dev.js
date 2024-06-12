const common = require('./webpack.common.js');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: path.join(__dirname, '../build'),
    client: {
      logging: 'verbose',
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public', to: './public' }],
    }),
  ],
  devtool: 'inline-source-map',
});
