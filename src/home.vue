<template>
  <div id="home">
    <el-tabs :tab-position="tabPosition"   type="border-card" @tab-click="tabclick">
      <el-tab-pane ><span slot="label"><i class="fab fa-bitcoin"></i> BTC</span>
      <div >
        <el-row >
          <el-col :lg="16" :sm="24"><candlestick style="width:100%" :coin="btccoin" ></candlestick></el-col>
          <el-col :lg="8" :sm="24"> <btctable></btctable></el-col>
        </el-row>
      </div>
      </el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fab fa-ethereum" ></i> ETH</span>
        <div >
          <el-row >
            <el-col :lg="16" :sm="24"><candlestick style="width:100%" :coin="ethcoin"></candlestick></el-col>
            <el-col :lg="8" :sm="24"> <btctable></btctable></el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fa fa-btc"></i> EOS</span></el-tab-pane>
    </el-tabs>
    <!-- <tradetable></tradetable> -->
    
  </div>
</template>

<script>
import btctable from './btctable.vue'
import candlestick from './candlestick.vue'
export default {
  components: {
    btctable,
    candlestick
  },
  mounted(){
  },
  methods:{
    tabclick:function(val){
      console.log(val)
      val.resize()
      //val.$children.$children.resize()
     
    }
  },
  data(){
    return{
      tabPosition:"top",
      btccoin:"btcusdt",
      ethcoin:"ethusdt",
      eoscoin:"eosusdt"
    }
  }
}
</script>

<style>
.test{
  background-color: red
}
</style>