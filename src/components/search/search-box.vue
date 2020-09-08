<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input ref="query" v-model="query" placeholder="请输入歌手名或歌曲名" class="box" @blur="cache"/>
    <i class="icon-dismiss" @click="clear" v-show="query!=''"></i>
  </div>
</template>

<script >
import bus from '../../base/bus/bus'

export default {
  data() {
    return {
      query: ""
    }
  },
  methods: {
    clear(){
      this.query = ""
    },
    cache(){
      this.$emit("cache",this.query)
    }
  },
  mounted() {
    // 挂载后监听bus中数据的变化
    bus.$on("chooseKey",data=>{
      // 将数据赋值给query属性
      this.query = data
    })
  },
  watch: {
    query(newVal){
      // 监听query值得变化，将变化后的值传递给父组件,派发事件
      this.$emit('queryChange',newVal)
    }
  },
};
</script>


<style scoped lang="stylus">
@import '~@common/stylus/variable'
.search-box
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 6px
  height 40px
  background #f3f3f3
  border-radius 20px
  .icon-search
    font-size 24px
    color $color-background
  input::-webkit-input-placeholder
    color #999
  input:-moz-placeholder
    color #999
  input:-ms-input-placeholder
    color #999
  .box
    flex 1
    margin 0 5px
    line-height 30px
    background #f3f3f3
    color $color-text
    font-size $font-size-medium
    &::placeholder
      color $color-text-d
  .icon-dismiss
    font-size 16px
    color $color-dialog-background
</style>