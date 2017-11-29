<template>
  <div id="app">
    <!-- 对应的组件内容渲染到router-view中 -->
    <FNav></FNav>   
    <router-view></router-view>
  </div>
</template>

<script>
  import FNav from './nav.vue'
export default {

  components:{
          FNav,
        },
  data(){
    return{

    }
  }
}
</script>
<style>
  body{
    margin: 0px;
  }
</style>