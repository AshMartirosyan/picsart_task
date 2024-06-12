const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.js',
    publicPath: '/',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        generator: {
          emit: false,
        },
      },
      {
        test: /\.(gif|png|jpe?g|webp|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          emit: false,
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10240,
          },
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        generator: {
          emit: false,
        },
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    ],
  },

  optimization: {
    splitChunks: false,
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  stats: 'none',
};
