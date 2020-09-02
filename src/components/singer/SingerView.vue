<template>
    <Scroll class="listview">
        <ul>
            <!-- 歌手列表 -->
            <li class="list-group" v-for="(singer,idx) in singerList" :key="idx">
                <h2 class="list-group-title">{{ singer.title }}</h2>
                <!-- 歌手列表 -->
                <ul>
                    <li class="list-group-item" v-for="(item,ix) in singer.singers" :key="ix">
                        <img :src="item.avatar" class="avatar" alt="">
                        <span class="name"> {{ item.fname }} </span>
                    </li>
                </ul>
            </li>
        </ul> 
        <div class="list-shortcut">
            <ul>
                <li v-for="(item,i) in getIndex" :key="i" class="item">
                    {{ item }}
                </li>
            </ul>
        </div>
    </Scroll>
</template>

<script>
import { getSingerList } from '../../api/singer'
import Scroll from '../../base/Scroll/Scroll'
export default {
    data() {
        return {
            singerList:[]
        }
    }, 
    computed: {
        getIndex(){
            return this.singerList.map(val => {
                return val.title[0]
            })
        }
    },
    methods: {
        _getSingerList(){
            getSingerList().then(data=>{
                this.singerList = data
            })
        }
    },
    created() {
        this._getSingerList();
    },
    components:{
        Scroll
    }
}
</script>

<style lang="stylus" scoped>
@import '~@common/stylus/variable'
.listview
    position relative
    width 100%
    height 100%
    overflow hidden
    background #fff
    .list-group
      padding-bottom 30px
      .list-group-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background #f2f2f2
      .list-group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 70px
          height 70px
          border-radius 50%
        .name
          margin-left 20px
          color $color-text-l
          font-size $font-size-medium-x
    .list-shortcut
      position absolute
      z-index 30
      right 0
      top 50%
      transform translateY(-50%)
      width 20px
      padding 20px 0
      border-radius 10px
      text-align center
      background rgba(200, 200, 200, 0.1)
      font-family Helvetica
      .item
        padding 3px
        line-height 1
        color #333
        font-size $font-size-small
        &.current
          color $color-theme
    .list-fixed
      position absolute
      top 0
      left 0
      width 100%
      .fixed-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background $color-highlight-background
    .loading-container
      display flex
      align-items center
      justify-content center
      transform translateY(100%)

</style>