<template>
    <div>
        <el-switch
        v-model="show"
        active-text="开启实时显示"
        inactive-text="关闭实时显示"
        @change="showchange">
        </el-switch>
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
    </div>
</template>
<script>
    export default {
        mounted(){
            
        },
        sockets: {
            connect: function(){
                console.log("connected")
            },
            // sencbtcusdt:function(val){
            //     let a={}
            //     let obj=JSON.parse(val)
            //     a.buy=obj.BuyAmount
            //     a.sell=obj.SellAmount
            //     a.price=obj.StartPrice
            //     this.btcusdt.unshift(a)
            //     if(this.btcusdt.length==7){
            //         this.btcusdt.pop()
            //     }
            // },
        },
        data () {
            return {
                btcusdt:[],
                show:false ,
            }
        },
         methods: {
             showchange:function(val){
                 console.log(val)
                 if (val){
                    this.$socket.emit('joincoin', "btcusdt");
                 }else{
                    this.$socket.emit('quitcoin', "btcusdt"); 
                 }
                
             }
        }
    }
</script>
<style>
    
</style>