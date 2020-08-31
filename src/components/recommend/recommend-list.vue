<template>
    <div>
        <ul>
            <li v-for="(d,i) in list" :key="i" class="item">
                
                <div class="icon p-left p-right">
                    <img :src="d.imgurl" alt="" class="recom-img">
                </div>
                <div class="text">
                    <div class="name">
                        {{ d.creator.name }}
                    </div>
                    <div class="desc">
                        {{ d.dissname }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import recomm from '../../api/recommend'
export default {
    data(){
        return {
            list:[]
        }
    },
    methods:{
        _getDiss(){
            recomm.getDiss().then(data =>{
                this.list = data
            }).catch(err => {
                console.log(err);
            })
            
        }
    },
    created(){
        this._getDiss()
    }
}
</script>

<style lang="stylus" scoped>
@import '~@common/stylus/variable'
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
    
</style>