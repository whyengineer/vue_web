<template>
  <div id="home">
    <el-tabs :tab-position="tabPosition"   type="border-card">
      <el-tab-pane ><span slot="label"><i class="fab fa-bitcoin"></i> BTC</span>
      <div >
        <el-row >
          <el-col :lg="16" :sm="24"><candlestick style="width:100%"></candlestick></el-col>
          <el-col :lg="8" :sm="24"> <mtable></mtable></el-col>
        </el-row>
      </div>

        
      </el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fab fa-ethereum"></i> ETH</span></el-tab-pane>
      <el-tab-pane><span slot="label"><i class="fa fa-btc"></i> EOS</span></el-tab-pane>
    </el-tabs>
    <!-- <tradetable></tradetable> -->
    
  </div>
</template>

<script>
import mtable from './table.vue'
import candlestick from './candlestick.vue'
export default {
  components: {
    mtable,
    candlestick
  },
  mounted(){
  },
  
  data(){
    return{
      tabPosition:"top"
    }
  }
}
</script>

<style>
.test{
  background-color: red
}
</style>