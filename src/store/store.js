import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    singerInfo:{},//歌手信息
  },
  getters: {
    getSingerInfo(state){//获取歌手信息
      return state.singerInfo;
    }
  },
  mutations: {
    setSingerInfo(state,payload){ //设置歌手信息
      state.singerInfo = payload.singer;
    }
  },
  actions: {}
})