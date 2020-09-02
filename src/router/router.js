import Vue from 'vue'
import VueRouter from 'vue-router'

import Rank from '@comp/rank/rank'
import Recommend from '@comp/recommend/recommend'
import Search from '@comp/search/search'
import Singer from '@comp/singer/singer'
import SingerDetail from '@comp/singerDetail/singerDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/singer',
      component:Singer,
      children:[
        {
          path:':fid',
          name:'singerDetail',
          component: SingerDetail
        }
      ]
    },
    
  ]
})