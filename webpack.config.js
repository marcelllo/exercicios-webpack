const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg|ttf|eot|woff(2)?)$/,
        loader: 'url-loader',
        options: {
          limit: 100,
          fallback: 'file-loader',
          publicPath: '/img',
          outputPath: '/img',
        },
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'iMedia Cursos Brasil',
      template: './src/index.html',
      favicon: false,
    }),
  ],
};
