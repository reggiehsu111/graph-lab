const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
 template: './src/index.html',
 filename: './index.html'
});
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: 'babel-loader'
   }
 },
  {
   test: /\.(css|s[ac]ss)$/i,
   use: ['style-loader', 'css-loader', 'sass-loader']
  }
]},
  resolve: {
    extensions: ['.js', '.ts'],
    fallback: {
      fs: false
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
 plugins: [htmlPlugin]
};
