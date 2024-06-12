const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/client.tsx',
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpe?g|webp|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 10240,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  target: 'web',
};
