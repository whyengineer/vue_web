<template>
<div>
  <Button type="primary" @click="refresh">Refresh</Button>
  <chart :options="polar" auto-resize></chart>
</div>
</template>

<style>
.echarts {
  width:1800;
}
</style>

<script>
import axios from 'axios'
export default {
  mounted(){
    var now =new Date()
    axios.get('http://api.whyengineer.com/getsstadata',{
      params:{
        coin:"ethusdt",
        plat:"huobi",
        year:now.getFullYear(),
        month:now.getMonth()+1,
        day:now.getDate(),
        type:"min1",
        hour:now.getHours(),
        min:now.getMinutes(),
        num:100
      }
    })
    .then((response)=> {
      console.log(response.data);
      for(var i=0;i<response.data.length;i++){
        //console.log(response.data[i].Day,response.data[i].Hour,response.data[i].Min)
        let time=response.data[i].Hour+':'+response.data[i].Min
        let value=[]
        value.push(response.data[i].StartPrice)
        value.push(response.data[i].EndPrie)
        value.push(response.data[i].LowPrice)
        value.push(response.data[i].HighPrice)
        this.xdata.unshift(time)
        this.ydata.unshift(value)
      }
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
  data: function () {
    return {
      xdata:[],
      ydata:[],
      polar:  {}
    }
  },
  methods:{
    refresh:function(){
  
    }
  }
}
</script>