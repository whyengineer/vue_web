<template>
  <div id="home">
     <h1>Hello world</h1>
    <Button type="primary" @click="test">Primary</Button>
    <chart
    :chart-data="datacollection" 
    :options="{responsive: false,
    scales: {
      yAxes: [{
                ticks: {
                    suggestedMin: 30,
                    suggestedMax: 50,
                    autoSkipPadding:5
                }
            }],
      xAxes: [{
                offset:true,
                ticks: {
                    autoSkip:true,
                    autoSkipPadding:10,
                    padding:25
                }
            }]
    }
            
    }" 
    :width="500" 
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
      for(var i=this.nowts-3600;i<this.nowts;i+=60){
        var date=new Date(i*1000)
        var hours = date.getHours()
        var minutes = "0" + date.getMinutes()
        this.timeLables.push(hours+':'+minutes.substr(-2))
      }
    },
    renderChart:function(){
      console.log("render chart")
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