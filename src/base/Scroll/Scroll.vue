<template>
    <div ref="wrapper">
        <div>
            <!-- 滚动的内容不固定,采用插槽接收滚动的内容 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    methods:{
        _initScroll(){
            // 初始化scroll对象
            let div = this.$refs.wrapper;
            if(!div){
                // 没有该元素,则不创建
                return;
            }
            this.scroll = new BSscroll(div,{
                click:true,
                probeType:2
            })
        },
        // 滚动到指定元素
        scrollToElement(ele){
            this.scroll && this.scroll.scrollToElement(ele,500);
        },
        // 滚动到顶部
        scrollToTop(){
            this.scroll && this.scroll.scrollToTop(0,0,500);
        },
        // 启用滚动条
        enable(){
            this.scroll && this.scroll.enable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
    // 挂载成功后执行初始化scroll对象的方法
    mounted(){
        // 在页面渲染成功之后在执行
        this.$nextTick(()=>{
            this._initScroll()
        })
    }
}
</script>