<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box @queryChange="change" @cache="his"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="show">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li class="item" v-for="(key,i) in hotkey" :key="i" @click="choose(key.k)">
              {{key.k}}
            </li>
          </ul>
        </div>
        <scroll class="search-history">
          <ul>
            <li class="title" v-for="(h,i) in history" :key="i">
              <span class="text" @click="choose(h)">
                {{h}}
              </span>
              <span class="clear" @click="del(i)">
                <i class="icon-clear"></i>
              </span>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
    <div class="search-result" v-show="!show">
      <Suggest :result="searchData"></Suggest>
    </div>
  </div>
</template>

<script>
import SearchBox from './search-box'
import Suggest from './suggest'
import Scroll from '../../base/scroll/Scroll'
import bus from '../../base/bus/bus'
import { getHotKey,searchKey } from '../../api/search'
export default {
  data() {
    return {
      hotkey: [],
      searchData: [],
      show: true,
      history: []
    }
  },
  updated() {
    let his = localStorage.getItem("history")
    his = his==null? []: JSON.parse(localStorage.getItem("history"))

    if(his.length==this.history.length){
      return ;
    }
    this.history.push(...his)
    // console.log(this.history)
  },
  methods: {
    choose(key){
      this.his(key)
      bus.$emit("chooseKey",key)
    },
    del(i){
      // 删除指定下标的元素
      this.history.splice(i,1)
      // 将删除后的数组重新保存进本地缓存
      this._setHistory()
    },
    _setHistory(){
      localStorage.setItem("history",JSON.stringify(this.history))
    },
    _getHotKey(){
      getHotKey().then(data=>{
        this.hotkey = data
      })
    },
    change(query){
      if(query.trim()==''){
        this.show = true
        return ;
      }
      this.show = false
      // 获取query相关的搜索结果
      searchKey(query).then(data=>{
        this.searchData = data
      })
    },
    his(query){
      if(query.trim()==''){
        return ;
      }
      // 判断历史记录中有没有该数据
      let index = this.history.findIndex(val=>{
        return query == val
      })
      console.log(index)
      if(index!=-1){ // 找到了，返回
        let old = this.history
        let a = old.splice(index,1) // 搜索的关键字
        this.history = [...a, ...old]
        this._setHistory()
        return ;
      }
      this.history.unshift(query)
      this._setHistory()
    }
  },
  created() {
    this._getHotKey()
  },
  components: {
    SearchBox,
    Suggest,
    Scroll
  }
}

</script>

<style lang="stylus" >
@import '~@common/stylus/variable'
@import '~@common/stylus/mixin'
.search
  .search-box-wrapper
    margin 20px
  .shortcut-wrapper
    position fixed
    top 178px
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 20px 20px 20px
        .title
          margin-bottom 20px
          font-size $font-size-medium-x
          color $color-text-l
          font-weight 900
        .item
          display inline-block
          padding 5px 8px
          margin 0 20px 10px 0
          border-radius 18px
          background $color-text-ll
          font-size $font-size-medium
          color $color-text-d
          border 1px solid #999
      .search-history
        position relative
        height 200px
        overflow hidden
        margin 0 20px
        .title
          display flex
          align-items center
          height 40px
          font-size $font-size-medium
          color $color-text-l
          .text
            flex 1
          .clear
            extend-click()
            .icon-clear
              font-size $font-size-medium
              color $color-text-d
  .search-result
    position fixed
    width 100%
    top 178px
    bottom 0
</style>