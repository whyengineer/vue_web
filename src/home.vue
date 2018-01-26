<template>
  <div id="home">
     <!-- <el-button type="primary" @click="ping">主要按钮</el-button> -->
    <el-tabs :tab-position="tabPosition"   type="border-card" @tab-click="tabclick">
      <el-tab-pane ><span slot="label"><i class="fab fa-bitcoin"></i> BTC</span>
      <div v-if="coin==='btc'">
        <el-row >
          <!-- <candlestick style="width:100%" :coin="btccoin" > -->
          <el-col :lg="16" :sm="24"></candlestick></el-col>
          <el-col :lg="8" :sm="24"> <btctable></btctable></el-col>
        </el-row>
      </div>
      </el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fab fa-ethereum" ></i> ETH</span>
        <div v-if="coin==='eth'">
          <el-row >
            <el-col :lg="16" :sm="24"><candlestick style="width:100%" :coin="ethcoin" ></candlestick></el-col>
            <el-col :lg="8" :sm="24"> <ethtable></ethtable></el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fa fa-btc"></i> EOS</span>
        <div  v-if="coin==='eos'">
          <el-row >
            <el-col :lg="16" :sm="24"><candlestick style="width:100%" :coin="eoscoin" ></candlestick></el-col>
            <el-col :lg="8" :sm="24"> <eostable></eostable></el-col>
          </el-row>
        </div>
        </el-tab-pane>
    </el-tabs>
    <!-- <tradetable></tradetable> -->
    
  </div>
</template>

<script>
import btctable from './btctable.vue'
import ethtable from './ethtable.vue'
import eostable from './eostable.vue'
import candlestick from './candlestick.vue'
export default {
  components: {
    btctable,
    candlestick,
    ethtable,
    eostable
  },
  mounted(){
  },
  methods:{
    ping:function(val){
      console.log("click")
      this.$socket.emit("coin","test")
    },
    tabclick:function(val){
      if(val.$el.id=="pane-1"){
        this.coin="eth"
      }else if(val.$el.id=="pane-0"){
        this.coin="btc"
      }else if(val.$el.id=="pane-2"){
         this.coin="eos"
      }

      //val.resize()
      //val.$children.$children.resize()
     
    }
  },
  data(){
    return{
      tabPosition:"top",
      btccoin:"btcusdt",
      ethcoin:"ethusdt",
      eoscoin:"eosusdt",
      coin:"btc"
    }
  }
}
</script>

<style>
</style>