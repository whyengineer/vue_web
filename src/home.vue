<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary" @click="test">Primary</Button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  mounted(){
    
  },
  sockets: {
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods:{
    test:function(){
      console.log("click")
      this.$socket.emit('chat message', "hello world");
      axios.get('/api/test', {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>