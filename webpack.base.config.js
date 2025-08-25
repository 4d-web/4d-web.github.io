/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

isProductionBuild = false;

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
  assets: 'src/assets',
};

const PATH = isProductionBuild ? PATHS.dist : PATHS.src;

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}/js/[name].js`,
    publicPath: isProductionBuild ? 'dist/' : undefined,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.scss'],
    alias: {
      '@': PATH,
      assets: path.resolve(__dirname, '../assets'),
    },
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
    }),
    new HTMLWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: isProductionBuild ? path.resolve(__dirname, './index.html') : './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/assets/images`,
          to: `${PATHS.assets}/images`,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: [
          { loader: isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader' },
          'css-loader',
        ],
      },
      {
        test: /\.module\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader' }, // gets the CSS from the JS and injects it into the DOM
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]', // [local]__[hash:base64:10]
              },
            },
          }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              webpackImporter: true,
            },
          }, // to convert SASS to CSS
          { loader: 'typed-css-modules-loader' }, // to generate a .d.ts
        ],
      },
    ],
  },
};
