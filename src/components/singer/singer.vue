<template></template>

<script>
</script>

<style scoped lang="stylus">
@import '~@common/stylus/variable'
.singer
  position fixed
  top 88px
  bottom 0
  width 100%
  .slide-enter-active, .slide-leave-active
    transition all 0.5s
  .slide-enter, .slide-leave-to
    transform translateX(100%)
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
