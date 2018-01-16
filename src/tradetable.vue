<template>
  <div >
   <Row>
     <Col :xs="24"  :lg="8"><h2 style="text-align: center">BTC实时交易数据</h2>  <mtable :data="btcusdt"></mtable>  </Col>
     <Col :xs="24"  :lg="8"> <h2 style="text-align: center">ETH实时交易数据</h2> <mtable :data="ethusdt"></mtable>  </Col>
    <Col :xs="24"  :lg="8"> <h2 style="text-align: center">EOS实时交易数据</h2> <mtable :data="eosusdt"></mtable>  </Col>
    
   </Row>
  </div>
</template>

<script>
import mtable from './table.vue'

export default {
  components: {
    mtable
  },
  mounted(){
  },
  sockets: {
    connect: function(){
      console.log('socket connected')
    },
    senceosusdt:function(val){
      let a={}
      let obj=JSON.parse(val)
      a.buy=obj.BuyAmount
      a.sell=obj.SellAmount
      a.price=obj.StartPrice
      this.eosusdt.unshift(a)
      if(this.eosusdt.length==6){
        this.eosusdt.pop()
      }
      //console.log(a)
    },
    sencethusdt:function(val){
      let a={}
      let obj=JSON.parse(val)
      a.buy=obj.BuyAmount
      a.sell=obj.SellAmount
      a.price=obj.StartPrice
      this.ethusdt.unshift(a)
      if(this.ethusdt.length==6){
        this.ethusdt.pop()
      }
      //console.log(a)
    },
    sencbtcusdt:function(val){
      let a={}
      let obj=JSON.parse(val)
      a.buy=obj.BuyAmount
      a.sell=obj.SellAmount
      a.price=obj.StartPrice
      this.btcusdt.unshift(a)
      if(this.btcusdt.length==6){
        this.btcusdt.pop()
      }
    },
  },
  data(){
    return{
      timeLables:[],
      valueLables:[],
      nowts:null,
      datacollection:null,
      eosusdt:[],
      ethusdt:[],
      btcusdt:[]
    }
  }
}
</script>

<style>
</style>