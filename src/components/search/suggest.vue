<template>
  <div ref="suggest" class='suggest'>
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(o,i) in result" :key="i">
        <div class="icon">
          <i :class="icon(o.type)"></i>
        </div>
        <div class="name">
          <p class="text"> {{o.name}} </p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" display='none'>
      <!-- <no-result title="抱歉，暂无搜索结果"></no-result> -->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default{
  props: {
    result: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    icon(type){
      if(type == 'singer'){
        return 'icon-mine'
      }
      return 'icon-music'
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>