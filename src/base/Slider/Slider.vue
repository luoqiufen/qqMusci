<template>
    <div class="slider">
        <!-- 轮播图基础组件 -->
        <van-swipe class="my-swipe slider-group" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(p,i) in pics" :key="i" class="slider-item">
                {{ p }}
            </van-swipe-item>
        </van-swipe>
    </div>
</template>


<script>
export default {
    props:{
        pics:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/variable.styl';

.slider {
  min-height: 1px;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>