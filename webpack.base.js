// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
// vue插件
let VuePlugin = require('vue-loader/lib/plugin')

let path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js','.css','.vue','.styl'],
    alias: {
      "@common": path.resolve(__dirname,'src/common'),
      "@comp": path.resolve(__dirname,'src/components')
    }
  },

  entry: './src/main.js',

  output: {
    path: __dirname+'/dist2',
    filename: '[name]-[hash:6].js'
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(styl|stylus)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      },
      // 处理图片
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use : {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:6].[ext]',
            outputPath: 'images/',
            limit: 30*1024,
            esModule: false
          }
        }
      },
      // 字体文件
      {
        test: /\.(ttf|woff|eot|svg)$/,
        use: 'file-loader'
      },
      // babel处理ES6
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // 处理vue文件
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:6].css"
    }),
    new VuePlugin()
  ]
}