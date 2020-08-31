import axios from 'axios'

// 获取recommend推荐页的数据

function getSlider(){
    // 请求地址
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    // 发送请求
    return axios.get(url).then(data => {
        console.log(data.data.slider);
    }).catch(err =>{
        console.log(err)
    })
}


export default {
    getSlider
}