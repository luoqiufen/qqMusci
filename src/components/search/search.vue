<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box @queryChange="change"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="show">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li class="item" v-for="(key,i) in hotkey" :key="i">
              {{key.k}}
            </li>
          </ul>
        </div>
        <div class="search-history"></div>
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
import { getHotKey,searchKey } from '../../api/search'
export default {
  data() {
    return {
      hotkey: [],
      searchData: [],
      show: true
    }
  },
  methods: {
    _getHotKey(){
      getHotKey().then(data=>{
        this.hotkey = data
      })
    },
    change(query){
      if(query==''){
        this.show = true
        return ;
      }
      this.show = false
      // 获取query相关的搜索结果
      searchKey(query).then(data=>{
        this.searchData = data
      })
    }
  },
  created() {
    this._getHotKey()
  },
  components: {
    SearchBox,
    Suggest
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