// 开发环境
let {merge} = require('webpack-merge')
let base = require('./webpack.base')
let axios = require('axios')

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
        "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg",
        "/v8/fcg-bin/v8.fcg",
        "/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",
        "/splcloud/fcgi-bin/gethotkey.fcg",
        "/splcloud/fcgi-bin/smartbox_new.fcg"
      ],
      target:"https://c.y.qq.com/",
      changeOrigin:true,
      headers:{
        referer:"https://c.y.qq.com",
        host:"c.y.qq.com"
      }
    },
    {
      context: [
        '/cgi-bin/musicu.fcg',
        '/cgi-bin/musics.fcg'
      ],
      target: 'https://u.y.qq.com',
      changeOrigin: true,
      headers: {
        referer: "https://u.y.qq.com",
        host: 'u.y.qq.com'
      }
    }
  ],
    before(app){
      // 跳转到歌手页
      app.get('/singer/:id',(req,res)=>{
        res.redirect('/singer')
      });
      // 跳转到推荐页
      app.get('/recommend/:dissid',(req,res)=>{
        res.redirect('/recommend');
      });
      // 处理recommend.js中发送的/getDiss请求来获取歌单的歌曲列表
      app.get('/getDiss',(req,res) => {
        // 获取歌单id
        let dissid = req.query.dissid;
        // 歌单歌曲的请求地址
        let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
        // 歌单歌曲请求需要的参数
        let data = {
          g_tk:5381,
          format:'json',
          inCharset:'utf8',
          outCharset:'utf-8',
          notice:0,
          type:1,
          json:1,
          utf8:1,
          onlysong:0,
          new_format:1,
          disstid:dissid,
          g_tk_new_20200303:5381,
          platform:'yqq',
          needNewCode:0
        };
        // 向y.qq.com发送():获取歌曲的请求
        axios.get(url,{
          params:data,
          headers:{
            referer:`https://y.qq.com/n/yqq/playlist/${dissid}.html`,
            host:'y.qq.com'
          }
        }).then(resData=>{
          res.send(resData.data.cdlist);
        }).catch(err => {
          res.send('err');
        })
      })
    }
  }
})