<template>
  <chart :options="polar" auto-resize ref="bar"></chart>
</template>

<style>
.echarts {
  /* widows: 100%; */
}
</style>

<script>
import axios from 'axios'
export default {
  mounted(){
    this.k= this.$refs.bar
    // for(var i=0;i<200;i++){
    //   this.xdata.push(initdata)
    // }
    var zerop=new Date()
    var now =new Date()
    zerop.setMinutes(now.getMinutes()+1)
    zerop.setSeconds(0)
    zerop.setMilliseconds(0)
    setTimeout(()=>{
      this.xdata.shift()
      this.ydata.shift()
      let a=this.newtime
      let b=this.newdata
      this.xdata.push(a)
      this.ydata.push(b)
      console.log("zero point",this.newdata)
    },zerop-now)
    axios.get('/api/gettrade',{
      params:{
        coin:this.coin,
        plat:"huobi",
        year:now.getFullYear(),
        month:now.getMonth()+1,
        day:now.getDate(),
        type:"min1",
        hour:now.getHours(),
        min:now.getMinutes(),
        num:60
      }
    })
    .then((response)=> {
      //console.log(response.data);
      //this.xdata=[]
      for(var i=0;i<response.data.length;i++){
       
        //console.log(response.data[i].Day,response.data[i].Hour,response.data[i].Min)
        let time=response.data[i].Hour+':'+response.data[i].Min
        let value=[]
        value.push(response.data[i].StartPrice)
        value.push(response.data[i].EndPrie)
        if(response.data[i].LowPrice==0){
          response.data[i].LowPrice=response.data[i].StartPrice
        }
        value.push(response.data[i].LowPrice)
        if(response.data[i].HighPrice==0){
          response.data[i].HighPrice=response.data[i].EndPrie
        }
        value.push(response.data[i].HighPrice)
        //fake a newdata
        if(i==0){
          this.newdata[0]=response.data[i].EndPrie
          this.newdata[1]=response.data[i].EndPrie
          this.newdata[2]=response.data[i].EndPrie
          this.newdata[3]=response.data[i].EndPrie
          this.ydata.unshift(this.newdata)
          if(response.data[i].Min==59){
            if(response.data[i].Hour==23){
              this.newdata="0:0"
            }else{
              this.newtime=(response.data[i].Hour+1)+':'+0
            }
          }else{
             this.newtime=response.data[i].Hour+':'+(response.data[i].Min+1)
          }
          this.xdata.unshift(this.newtime)
        }
        this.xdata.unshift(time)
        this.ydata.unshift(value)
      }
      let k= this.$refs.bar
      k.resize()
    })
    .catch(function (error) {
      console.log(error);
    });
    this.polar={
       tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
        }
      },
      xAxis: {
         type: 'category',
         data: this.xdata,
         axisLine: { lineStyle: { color: '#8392A5' } }
      },
      yAxis: {
         scale: true,
         axisLine: { lineStyle: { color: '#8392A5' } },
         splitLine: { show: false }
      },
      dataZoom: [{
        textStyle: {
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
      }, {
          type: 'inside'
      }],
      series: [{
          type: 'candlestick',
          data: this.ydata
             
      }]
    }
  },
  created(){
    
  },
  data: function () {
    return {
      newdata:[0,0,0,0],
      newtime:[],
      xdata:[],
      ydata:[],
      polar:  {},
      k:{}
    }
  },
  methods:{
    resize:function(){
       this.k.resize()
    }
  },
  props: {
    coin:{
        type:String,
        default:"btcusdt"
    },
  }
}
</script>