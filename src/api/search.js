// 获取搜索页的数据
import axios from 'axios'

// 获取热门关键字
function getHotKey(){
  let url = '/splcloud/fcgi-bin/gethotkey.fcg'
  let data = {
    g_tk_new_20200303: 5381,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0
  }
  return axios.get(url,{
    params: data
  }).then(res=>{
    return Promise.resolve(res.data.data.hotkey.splice(0,15))
  }).catch(err=>{
    return Promise.reject(err)
  })
}

// 搜索关键字
function searchKey(query){
  let url = '/splcloud/fcgi-bin/smartbox_new.fcg'
  let data = {
    is_xml: 0,
    key: query,
    g_tk_new_20200303: 5381,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0
  }
  return axios.get(url,{
    params: data
  }).then(res=>{
    let data = []
    let {singer,song} = res.data.data
    let singerList = singer.itemlist
    let songList = song.itemlist
    data = [
      ...filter(singerList,'singer'),
      ...filter(songList,'song')
    ]
    return Promise.resolve(data)
  }).catch(err=>{
    return Promise.reject(err)
  })
}


export {
  getHotKey,
  searchKey
}

/**
 * @param {Array} arr 过滤的数组
 * @param {String} type 类型 'singer' 表示歌手，'song' 表示歌曲
 */
function filter(arr,type){
  let result = []
  arr.forEach(val=>{
    if(type=='singer'){
      result.push({
        type: type,
        name: val.singer
      })
    }else{
      result.push({
        type: type,
        name: `${val.name} - ${val.singer}`
      })
    }
  })
  return result;
}
