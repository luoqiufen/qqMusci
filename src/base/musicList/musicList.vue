<template>
  <div class="music-list">
    <div class="back" @click="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{title}} </h1>
    <div class="bg-image" :style="bgImg" ref="bgImg">
      <div class="filter"></div>
    </div>
    <Scroll class="list" ref="list">
        <div class="song-list-wrapper">
            <SongList :songs="songs"></SongList>
        </div>
    </Scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import SongList from '../songList/songList'
import Scroll from '../scroll/Scroll'
export default {
    props:{
        title:{//标题
            type:String,
            default:""
        },
        avatar:{//图片背景
            type:String,
            default:""
        },
        songs:{//歌曲列表
            type:Array,
            default(){
                return [];
            }
        }
    },
    computed: {
        bgImg(){
            return `background-image:url(${this.avatar})`
        }
    },
    methods: {
        back(){
            this.$router.back();
        }
    },
    mounted() {
            // 设置挂载成功后list的top
            this.$refs.list.$el.style.top = this.$refs.bgImg.clientHeight+'px'
    },
    components:{
        SongList,
        Scroll
    }
}
</script>

<style scoped lang="stylus">
@import '~@common/stylus/variable'
@import '~@common/stylus/mixin'
.music-list
  position fixed
  z-index 100
  top 0
  left 0
  bottom 0
  right 0
  background $color-background
  .back
    position absolute
    top 0
    left 6px
    z-index 50
    .icon-back
      display block
      padding 10px
      font-size $font-size-large-x
      color $color-theme
  .title
    position absolute
    top 0
    left 10%
    z-index 40
    width 80%
    no-wrap()
    text-align center
    line-height 40px
    font-size $font-size-large
    color #fff
  .bg-image
    position relative
    width 100%
    height 0
    padding-top 70%
    transform-origin top
    background-size cover
    .play-wrapper
      position absolute
      bottom 20px
      z-index 50
      width 100%
      .play
        box-sizing border-box
        width 135px
        padding 7px 0
        margin 0 auto
        text-align center
        border 1px solid $color-theme
        color $color-theme
        border-radius 100px
        font-size 0
        .icon-play
          display inline-block
          vertical-align middle
          margin-right 6px
          font-size $font-size-medium-x
        .text
          display inline-block
          vertical-align middle
          font-size $font-size-small
  .bg-layer
    position relative
    height 100%
    background #fff
  .list
    position fixed
    top 0
    bottom 0
    width 100%
    background #fff
    overflow hidden
    .song-list-wrapper
      padding 20px 30px
    .loading-container
      display flex
      align-items center
      justify-content center
      transform translateY(100%)
</style>