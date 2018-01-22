<template>
   <el-table
      :data="btcusdt"
      style="width: 100%">
      <el-table-column
        prop="buy"
        label="买入数量"
        >
      </el-table-column>
      <el-table-column
        prop="sell"
        label="卖出数量"                                    
       >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格(USDT)">
      </el-table-column>
    </el-table>
</template>
<script>
    export default {
        sockets: {
             senceosusdt:function(val){
                let a={}
                let obj=JSON.parse(val)
                a.buy=obj.BuyAmount
                a.sell=obj.SellAmount
                a.price=obj.StartPrice
                this.btcusdt.unshift(a)
                if(this.btcusdt.length==7){
                    this.btcusdt.pop()
                }
            },
        },
        data () {
            return {
                btcusdt:[]
            }
        },
         methods: {
        }
    }
</script>
<style>
    
</style>