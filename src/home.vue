<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary">Primary</Button> 
    <!-- <tradetable></tradetable> -->
    <candlestick></candlestick>
  </div>
</template>

<script>
import tradetable from './tradetable.vue'
import candlestick from './candlestick.vue'
export default {
  components: {
    tradetable,
    candlestick
  },
  mounted(){
  },
  
  data(){
    return{
    }
  }
}
</script>

<style>
</style>