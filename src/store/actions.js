export default {
  // actions可以一次性提交多个mutation
  setPlaySong({commit}, {playList,currentIndex}){
    // 采用解构的方式获取context中的commit方法以及需要的参数数据
    commit('setPlaying',{playing:true})
    commit('setPlayList',{playList})
    commit('setCurrentIndex',{currentIndex})
    commit('setOrderList',{orderList:playList})
  }
}