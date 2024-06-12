const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public', to: './public' }],
    }),
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(js|jsx|ts|tsx|css|html|svg|woff|woff2|ttf)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 150000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors/vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, '../build'),
    assetModuleFilename: 'assets/[name].[hash:8][ext]',
    publicPath: '/',
  },
  devtool: 'source-map',
});
