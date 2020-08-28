<template>
  <div>
    <h1>排行榜</h1>
  </div>
</template>

<script>
</script>

<style scoped lang="stylus">
@import '~@common/stylus/variable'
@import '~@common/stylus/mixin'
.rank
  position fixed
  width 100%
  top 88px
  bottom 0
  .toplist
    height 100%
    overflow hidden
    .item
      display flex
      margin 0 20px
      padding-top 10px
      &:last-child
        padding-bottom 20px
      .icon
        flex 0 0 100px
        width 120px
        img
          border-radius 0 8px 8px 0
      .songlist
        flex 1
        display flex
        flex-direction column
        justify-content center
        padding 0 20px
        height 120px
        overflow hidden
        background rgba(154, 217, 136, 0.3)
        color $color-text-d
        font-size $font-size-medium-x
        border-radius 8px 0 0 8px
        .song
          no-wrap()
          line-height 26px
          .name
            color #888
    .loading-container
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
  .slide-enter-active, .slide-leave-active
    transition all 0.5s
  .slide-enter, .slide-leave-to
    transform translateX(100%)
</style>