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
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    alias: {
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
        // {
        //   from: `${PATHS.src}/assets/fonts`,
        //   to: `${PATHS.assets}/fonts`,
        // },
      ],
    }),
    // new CompressionPlugin({
    //   test: /\.tsx(\?.*)?$/i,
    // }),
    // new CompressionPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        generator: {
          filename: '[name].[ext]',
          outputPath: 'assets/img/',
        },
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(woff2?|ttf|otf|eot|svg)$/,
      //   exclude: /node_modules/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]',
      //   },
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //   },
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   type: `${PATHS.src}/assets/fonts`,
      //   dependency: { not: ['url'] },
      // },
      // {
      //   test: /\.(ttf|woff|woff2|eot|mp3)$/,
      //   loader: 'file-loader',
      //   generator: {
      //     filename: '[path][name][ext]',
      //     outputPath: 'assets/fonts/',
      //   },
      // },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          { loader: isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader' }, // щоб ввести результат в DOM як стильовий блок
          // { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                // process.env.NODE_ENV === 'development' ?
                localIdentName: '[local]', // [local]__[hash:base64:10]
              },
            },
          }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader', options: { sourceMap: true } }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },
    ],
  },
};
