// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base')

module.exports = merge(base, {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: __dirname+'/dis',
    host: 'localhost',
    port: 4001,
    open: false,
    overlay: {
      errors: true
    },
    historyApiFallback:true,
    hot: true,
    proxy: [{
      context:[
        "/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
        "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
      ],
      target:"https://c.y.qq.com/",
      changeOrigin:true,
      headers:{
        referer:"https://c.y.qq.com",
        host:"c.y.qq.com"
      }
    }]
  }
})