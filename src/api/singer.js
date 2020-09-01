// 获取歌手页的数据
import axios from 'axios'

// 获取歌手列表
function getSingerList(){
    let url = "/v8/fcg-bin/v8.fcg";
    let data = {
        g_tk: 5381,
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq.json',
        page: 'list',
        channel: 'singer',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1
    }

    return axios.get(url,{
        params:data
    }).then(res => {
        // 先将数据格式化,然后再返回给页面解析渲染
        return Promise.resolve(format(res.data.data.list));
    },err => {
        return Promise.reject(err);
    })
}

export {
    getSingerList
}

/**
 * @param {Array} list 
 * @returns {Array} arr
 */
function format(list){
    // 最终返回的数据
    let data = {
        hot:{
            title: '热门',
            singers:[]
        }
    }
    // 遍历list数组,取到里面每一个元素
    for(let i=0;i<list.length;i++){
        // 取前十条数据作为热门数据
        if(i<10){
            let singer = {};
            singer.fid = list[i].Fsinger_mid
            singer.fname = list[i].Fsinger_name
            singer.avatar = `http://y.gtimg.cn/music/photo_new/T001R150x150M000${list[i].Fsinger_mid}.jpg?max_age=2592000`;
            data.hot.singers.push(singer);
        }
        // 取首字母,根据首字母分类
        let key = list[i].Findex;
        // 判断data中有没这个key
        if(!data[key]){
            // 没有这个key
            data[key] = {
                title:key,
                singers:[]
            }
        }
        // 有这个key,将数据添加到singers中
        data[key].singers.push({
            fid : list[i].Fsinger_mid,
            fname : list[i].Fsinger_name,
            avatar : `http://y.gtimg.cn/music/photo_new/T001R150x150M000${list[i].Fsinger_mid}.jpg?max_age=2592000`
        })
    }

    let hot = data.hot;//热门数据
    let letters = [];//首字母
    let rest = [];//非首字母
    for(let key in data){
        let code = key.charCodeAt(0)
        if(code>=65 && code<=90){
            letters.push(data[key])
        }else if(key != 'hot'){
            rest.push(data[key]);
        }
    }
    // 对字母排序
    letters.sort((a,b) => {
        return a.title.charCodeAt(0)-b.title.charCodeAt(0)
    })
    // 将其他所有的title统一修改为#
    rest.forEach(val => {
        val.title = '#';
    })
    let arr = [
        hot,...letters,...rest
    ]
    return arr;
}