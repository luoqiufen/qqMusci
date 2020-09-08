<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,i) in songs" :key="i" class="item" @click="slectSong(i)">
        <div class="content">
          <h2 class="name"> {{song.songname}} </h2>
          <p class="desc">{{desc(song)}} </p>
        </div>
      </li>
    </ul>
  </div>
</template> 

<script>

export default {
  props:{
    songs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    desc(song){
      let singer = song.singer;
      let albumname = song.albumname;
      let str = '';
      singer.forEach(val => {
        str += `/${val.name}`
      })
      str = str.slice(1);
      str = `${str}~${albumname}`
      return str
    },
    slectSong(index){
      this.$emit('selectSong',index)
    }
  },
}
</script>

<style scoped lang="stylus">
@import '~@common/stylus/variable'
@import '~@common/stylus/mixin'
.song-list
  .item
    display flex
    align-items center
    box-sizing border-box
    height 64px
    font-size $font-size-medium
    // .rank {
    // flex: 0 0 25px;
    // width: 25px;
    // margin-right: 30px;
    // text-align: center;

    // .icon {
    // display: inline-block;
    // width: 25px;
    // height: 24px;
    // background-size: 25px 24px;

    // &.icon0 {
    // bg-image('first');
    // }

    // &.icon1 {
    // bg-image('second');
    // }

    // &.icon2 {
    // bg-image('third');
    // }
    // }

    // .text {
    // color: $color-theme;
    // font-size: $font-size-large;
    // }
    // }
    .content
      flex 1
      line-height 20px
      overflow hidden
      // display flex
      align-items center
      padding-left 15px
      .index
        margin-right 15px
      .name
        no-wrap()
        color #000
        font-size 16px
      .desc
        no-wrap()
        margin-top 4px
        color #888
  .bgColor
    background #f3f3f3
</style>