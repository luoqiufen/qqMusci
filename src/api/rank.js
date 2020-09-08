// 获取排行榜的数据
import axios from 'axios'

function getRankList(){
  let url = '/cgi-bin/musicu.fcg'
  let data = {
    _: new Date().getTime(),
    data: {
      "comm":{
        "g_tk":5381,
        "uin":"",
        "format":"json",
        "inCharset":"utf-8",
        "outCharset":"utf-8",
        "notice":0,
        "platform":"h5",
        "needNewCode":1,
        "ct":23,
        "cv":0
      },
      "topList":{
        "module":"musicToplist.ToplistInfoServer",
        "method":"GetAll",
        "param":{}
      }
    }
  }
  return axios.get(url,{
    params: data
  }).then(res=>{
    return Promise.resolve(res.data.topList.data.group)
  }).catch(err=>{
    console.log(err)
  })
}

export {
  getRankList
}
