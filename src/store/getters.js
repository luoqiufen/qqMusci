export default {
  getSingerInfo(state){//获取歌手信息
    return state.singerInfo
  },
  getPlaying(state){ // 获取播放状态
    return state.playing
  },
  getPlayList(state){ // 获取播放列表
    return state.playList
  },
  getCurrentIndex(state){ // 获取当前索引
    return state.currentIndex
  },
  getPlayMode(state){ // 获取播放模式
    return state.playMode
  },
  getFullScreen(state){ // 获取播放形式
    return state.fullScreen
  },
  getOrderList(state){ // 获取顺序列表
    return state.orderList
  },
  getCurrentSong(state){ // 获取当前播放歌曲
    return state.playList[state.currentIndex] || {}
  }
}