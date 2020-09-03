<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <!-- 轮播图 -->
        <div class="slider-wrapper">
          <Slider :pics="slider"></Slider>
        </div>
        <!-- 热门歌曲列表 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌曲推荐</h1>
          <RecommendList @select="select"></RecommendList>
        </div>
      </div>
    </scroll>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Slider from '../../base/slider/Slider'
import recomm from '../../api/recommend'
import RecommendList from './recommend-list'
import Scroll from '../../base/scroll/Scroll'
import {mapMutations} from 'vuex'

export default {
  data(){
    return {
      slider:[],
    }
  },
  components:{
    Slider,
    RecommendList,
    Scroll
  },
  created(){
    this._getSlider();
  },
  methods:{
    ...mapMutations(['setSingerInfo']),
    _getSlider(){
      recomm.getSlider().then(data => {
        this.slider = data;
      }).catch(err => {
        console.log(err)
      })
    },
    select(d){
      let {
        dissid, 
        imgurl, 
        creator:{name}
      } = d;
      // 将数据设置到状态中
      this.setSingerInfo({
        singer: {dissid,imgurl,name}
      })
      // 路由跳转
      this.$router.push(`/recommend/${dissid}`)
    }
  }
}
</script>

<style scoped lang="stylus" >
@import '~@common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      height 100%
      overflow hidden
      position relative
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium-x
        color $color-theme
      .item
        display inline-flex
        box-sizing border-box
        align-items center
        flex-direction column
        width 50%
        .p-left
          padding-left 10px
        .p-right
          padding-right 10px
        .icon
          flex 0 0 60px
          max-width 160px
          .recom-img
            border-radius 10px
            max-width 160px
        .text
          line-height 20px
          font-size $font-size-medium
          max-width 160px
          margin-top 6px
          .name
            margin-bottom 10px
            color #888
          .desc
            color $color-text-d
    .loading-container
      display flex
      align-items center
      justify-content center
      transform translateY(100%)
  .slide-enter-active, .slide-leave-active
    transition all 0.5s
  .slide-enter, .slide-leave-to
    transform translateX(100%)
</style>