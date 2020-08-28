<template>
  <div class="tab">
    <router-link v-for="(t,i) in tabs" :key="i" :to="t.link" class="tab-item">
      <span class="tab-link"> {{ t.text }} </span>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabs: [
        {link:'/recommend',text:'推荐'},
        {link:'/singer',text:'歌手'},
        {link:'/rank',text:'排行'},
        {link:'/search',text:'搜索'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus" >
@import '~@common/stylus/variable'
.tab
  display flex
  height 44px
  line-height 44px
  font-size $font-size-medium-x
  .tab-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color $color-text-l
    &.router-link-active
      .tab-link
        color $color-theme
        border-bottom 2px solid $color-theme
</style>