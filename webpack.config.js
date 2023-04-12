/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

isProductionBuild = false;

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  devtool: 'source-map', // карта файлов для перехода на оригинал
  //mode: 'development', // оригинальный код

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, '../assets'),
    },
  },
  devServer: {
    static: __dirname,
    port: 8080,
    open: false,
    compress: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new CompressionPlugin({
    //   test: /\.tsx(\?.*)?$/i,
    // }),
    // new HTMLWebpackPlugin({
    //   template: path.join(__dirname, 'index.html'),
    // }),
    //new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         svgo: {
      //           plugins: [
      //             {
      //               removeTitle: false,
      //             },
      //           ],
      //           floatPrecision: 2,
      //         },
      //         jsx: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(ttf|woff|woff2|eot|mp3)$/,
        loader: 'file-loader',
        generator: {
          filename: '[path][name][ext]',
          outputPath: 'assets/fonts/',
        },
      },
      // { test: /\.scss$/, loader: 'typescript-plugin-css-modules' },
      // { test: /\.scss$/, loader: "css-modules-typescript-loader"},
      // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?silent' },

      {
        test: /\.(sc|c)ss$/i,
        use: [
          { loader: isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader' }, // щоб ввести результат в DOM як стильовий блок
          // { loader: 'typings-for-css-modules' },
          // { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader', options: { sourceMap: true } }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },

      // { test: /\.css$/, loader: 'typings-for-css-modules?modules' },
      // { test: /\.scss$/, loader: 'typings-for-css-modules?modules&sass' },

      // {
      //     test: /\.css$/i,
      //     use: ["style-loader", "css-loader"],
      // }
      // {
      //     test: /\.s[ac]ss$/i,
      //     use: ['style-loader', 'sass-loader'],
      // },
    ],
  },
};
