export default {
  setSingerInfo(state,payload){//设置歌手信息
    state.singerInfo = payload.singer
  },
  setPlaying(state,payload){ // 设置播放状态
    state.playing = payload.playing
  },
  setPlayList(state,payload){ // 设置播放列表
    state.playList = payload.playList
  },
  setCurrentIndex(state,payload){ // 设置当前索引
    state.currentIndex = payload.currentIndex
  },
  setPlayMode(state,payload){ // 设置播放模式
    state.playMode = payload.playMode
  },
  setFullScreen(state,payload){ // 设置播放形式
    state.fullScreen = payload.fullScreen
  },
  setOrderList(state,payload){ // 设置顺序列表
    state.orderList = payload.orderList
  }
}