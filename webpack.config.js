/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

isProductionBuild = false;

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  devtool: 'source-map', // карта файлов для перехода на оригинал
  // mode: 'development', // оригинальный код

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    alias: {
      ui: path.resolve(__dirname, '../ui'),
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
    // new HTMLWebpackPlugin({
    //   template: path.join(__dirname, 'index.html'),
    // }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: ['source-map-loader'],
      // },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   use: 'ts-loader',
      //   test: /\.(ts)$/,
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(ttf|woff|woff2|eot|mp3)$/,
        use: ['file-loader'],
      },
      // { test: /\.scss$/, loader: 'typescript-plugin-css-modules' },
      // { test: /\.scss$/, loader: "css-modules-typescript-loader"},
      // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?silent' },

      // { loader: 'css-modules-typescript-loader' }
      {
        test: /\.(sc|c)ss$/i,
        use: [
          { loader: isProductionBuild ? MiniCssExtractPlugin.loader : 'style-loader' }, // щоб ввести результат в DOM як стильовий блок
          { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader' }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },

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
