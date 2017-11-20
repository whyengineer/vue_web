<template>
  <div id="esp32snow">
    <Row>
       
        <Col span="8" offset="4" id="info1">
            <img src="https://img.whyengineer.com/espsnowtop.png" id="img">
        </Col>
        <Col span="8" id="info2">
            <img src="https://img.whyengineer.com/espsnowback.png" id="img">
        </Col>
         <Col span="18" id="name">
            <h1>ESP32-SNOW SPEC</h1>
        </Col>
        <Col span="6" id="name"><Button type="primary" long shape="circle"  size="large" @click="snowbuy">Buy It</Button></Col>
        <Col span="20" offset="2">
            <Card >
                <div style="text-align:center">
                    <h1 slot="title" style="text-align:left"> <i class="fa fa-microchip"></i> CPU:</h1>
                    <h2>Xtensa Dual-core 32-bit LX6 microprocessor(s),up to 600 DMIPS</h2>
                    <h2>448 KB ROM and 520 KB SRAM</h2>
                    <h2>External <span style="color:red;">4MB</span> Flash and <span style="color:red">4MB</span> PSRAM</h2>
                    <h2>Compliant with Bluetooth v4.2 BR/EDR and BlE specification</h2>
                    <h2>WIFI 802.11 n(2.4GHz), up to 150 Mbps</h2>
                </div>
            </Card>
        </Col>
        <Col span="20" offset="2">
            <Card >
                <div style="text-align:center">
                    <h1 slot="title" style="text-align:left"> <i class="fa fa-asterisk"></i> PERIPHERAL:</h1>
                    <h2>WM8978 Auido Codec, 48K 32Bits Stereo</h2>
                    <h2>MPU6050 3-Axi Accelerate 3-Axi Gyroscopes</h2>
                    <h2>BQ24075 Li-ion Charge IC and power path manage</h2>
                    <h2>Expand All GPIO</h2>
                </div>
            </Card>
        </Col>
        <Col span="24" style="height:50px">
        </Col>
    </Row>
</div>
</template>
<script>
    import FNav from './nav.vue'
    export default {
        components:{
          FNav,
        },
        methods:{
            snowbuy:function(){
                console.log("snow buy")
                //todo:
                window.open("https://item.taobao.com/item.htm?spm=686.1000925.0.0.7b6366f3KnxVIH&id=561537244126")
              },
        }
    }
</script>
<style>
    body{
        background-color: #081320;
    }
    #name{
        color: white;
        text-align: left;
        padding: 50px;
        line-height: 50px;
        vertical-align: ;
    }
    #info1{
        text-align: right;
    }
    #info2{
        text-align: left;
        position: relative;
        top: 30px;
        left: 0px;
    }
    #img{
        width: 80%;
    }
</style>