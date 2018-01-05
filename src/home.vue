<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary" @click="test">Primary</Button>
   <mychart></mychart>
  </div>
</template>

<script>
import axios from 'axios'
import mychart from './1chart.vue'

export default {
  components: {
    mychart 
  },
  mounted(){
     this.renderChart()
     console.log(this.timeLables)
     console.log(this.nowts)
     setInterval(() => { 
            this.renderChart();
     }, 1000*60)
    
  },
  sockets: {
    connect: function(){
      console.log('socket connected')
    },
    btcusdt:function(val){
      //console.log(val)
    },
    ethusdt:function(val){
      //console.log(val)
    },
    eosusdt:function(val){
      console.log(val)
    }
  },
  methods:{
    getyaxi:function(){
      for(var i=0;i<60;i++){
        this.valueLables.push(i)
      }
    },
    getxaxi:function(){
      var a=new Date()
      this.nowts=	Math.round(a.getTime()/1000)
      for(var i=this.nowts-3600+1;i<=this.nowts;i+=60){
        var date=new Date(i*1000)
        var hours = date.getHours()
        var minutes = "0" + date.getMinutes()
        this.timeLables.push(hours+':'+minutes.substr(-2))
      }
    },
    renderChart:function(){
      this.timeLables=[]
      this.valueLables=[]
      this.getxaxi()
      this.getyaxi()
      this.datacollection={
        labels: this.timeLables,
        datasets: [
          {
            label: "btcusdt",
            fill:false,
            backgroundColor: '#f87979',
            data: this.valueLables
          }
        ]
      }
    },
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
      timeLables:[],
      valueLables:[],
      nowts:null,
      datacollection:null
    }
  }
}
</script>

<style>

</style>