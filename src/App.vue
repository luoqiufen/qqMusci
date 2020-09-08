<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    
    <player></player>
    <router-view></router-view>
  </div>
</template>


<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
import Player from './components/player/player'
export default {
  components:{
    MHeader,
    Tab,
    Player
  }
}
</script>