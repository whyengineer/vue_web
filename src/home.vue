<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary" @click="test">Primary</Button>
    <chart
    :data="datacollection" 
    :options="{responsive: false, maintainAspectRatio: false}" 
    :width="400" 
    :height="200"
    ></chart>
  </div>
</template>

<script>
import axios from 'axios'
import chart from './chart.vue'

export default {
  components: {
    chart 
  },
  mounted(){
    
  },
  sockets: {
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    btcusdt:function(val){
      console.log(val)
    },
    ethusdt:function(val){
      console.log(val)
    }
  },
  methods:{
    test:function(){
      console.log("click")
      this.$socket.emit('chat_message', "hello world");
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
      datacollection:{
        labels: ['January', 'February'],
        
        datasets: [
          {
            fill:'-1',
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>