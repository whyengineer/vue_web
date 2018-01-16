<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary" @click="test">Primary</Button> 
    <tradetable></tradetable>
  </div>
</template>

<script>
import tradetable from './tradetable.vue'

export default {
  components: {
    tradetable
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