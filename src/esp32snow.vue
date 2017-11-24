<template>
  <div id="esp32snow">
    <Row>
       
        <Col span="8" offset="4" id="info1">
            <img src="https://img.whyengineer.com/espsnowtop.png" id="img">
        </Col>
        <Col span="8" id="info2">
            <img src="https://img.whyengineer.com/espsnowback.png" id="img">
        </Col>
    </Row>
    <Row style="padding:30px">
        <Col span="8" id="btn"><Button type="primary" long shape="circle"  size="large" @click="snowgit"><i class="fa fa-github fa-lg" aria-hidden="true"></i> Github</Button></Col>
        <Col span="8" id="btn"><Button type="primary" long shape="circle"  size="large" @click="snowwiki"><i class="fa fa-wikipedia-w fa-lg" aria-hidden="true"></i> Wiki</Button></Col>
        <Col span="8" id="btn"><Button type="primary" long shape="circle"  size="large" @click="snowbuy"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> Buy It</Button></Col>
    </Row>
    <Row>
        <Col span="24" id="name">
            <h1>ESP32-SNOW SPEC</h1>
        </Col>
    </Row>
    <Row>
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
            snowgit:function(){
                console.log("snow buy")
                //todo:
                window.open("https://github.com/whyengineer/esp32_snow")
              },
            snowwiki:function(){
                window.open("https://wiki.whyengineer.com/index.php/ESP32-SNOW%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3")
            }
        }
    }
</script>
<style>
    body{
        background-color: #081320;
    }
    #btn{
        padding: 50px;
    }
    #name{
        color: white;
        text-align: left;
        padding: 20px;
        padding-bottom: 70px;
        padding-top: 0px;
        line-height: 50px;
        vertical-align:center;
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