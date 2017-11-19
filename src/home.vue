<template>
  <div id="home">
    <Fcarousel
    ></Fcarousel>
    <Row id="finfo">
        <Col :md="24" :lg="{span:10,offset:1}">
          <Card style="height:450px" id="card1">
             <p slot="title">ESP32_SNOW</p>
             <div style="text-align:center">
              <img src="./assets/esp32_snow.png" style="width:70%;height:70%">
              <Row style="padding:50px">
                <Col span="11">
                <Button type="success" long shape="circle"  size="large" @click="snowlearn">Learn More</Button>
              </Col>
              <Col span="11" offset="2">
                <Button type="primary" long shape="circle"  size="large" @click="snowbuy">Buy It</Button>
            </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col :md="24" :lg="{span:10,offset:2}" >
          <Card style="height:450px">
               <p slot="title">ESP32_CIRCLE</p>
               <div style="text-align:center">
                <img src="./assets/esp32_circle.png" style="width:32%;height:32%">
                <Row style="padding:50px">
                  <Col span="11">
                  <Button type="success" long shape="circle"  size="large">Learn More</Button>
                </Col>
                <Col span="11" offset="2">
                  <Button type="primary" long shape="circle"  size="large" disabled>Buy It</Button>
              </Col>
                </Row>
              </div>
          </Card>
        </Col>
    </Row>
    <Foot>
   </Foot>
  </div>
</template>
<script>
    import Fcarousel from "./carousel.vue"
    import Foot from "./foot.vue"
    import bus from "./bus.js"
    const width=document.documentElement.clientWidth
    const height=document.documentElement.clientHeight
    export default {
        components:{
          Fcarousel,
          Foot,
        },
        data () {
          
            return {
                // count:4,
                // icons:["fa fa-home","fa fa-microchip","fa fa-wikipedia-w","fa fa-github"],
                // list:["/","https://www.npmjs.com/package/vue-quick-menu","http://www.wheelsfactory.cn/","http://www.wheelsfactory.cn/"],
                // backgroundColor:'#081317',
                // color:'#ffffff',
                // position:'top-left',
                // isOpenNewTab:false,
                fullHeight:height+"px",
                fullWeight:width+"px",
                value: 0,
                fcanvas:{
                  winWidth:width,
                  winHeight:height-20
                },
                flist:{
                  halfheight:100+"px",
                  halfwidth:100+"px"
                },
                activeColor:'red',
                logoImg:{
                  h:width/6+"px",
                  w:width/6+"px",
                  left:width/2-width/12+"px",
                  top:height/2-width/12+"px"
                },
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                },
                
            }
        },
        mounted: function () {
          window.addEventListener('resize', this.handleResize)
          document.addEventListener('touchmove', function (e) {
              e.preventDefault()
          })
        },
        beforeDestroy: function () {
          window.removeEventListener('resize', this.handleResize)
        },
        methods:{
          snowlearn:function(){
            bus.$emit("menuclick","2-2")
            this.$router.push('/esp32snow')
          },
          snowbuy:function(){
            console.log("snow buy")
            //todo:
            window.open("https://item.taobao.com/item.htm?spm=686.1000925.0.0.7b6366f3KnxVIH&id=561537244126")
          },
          pageChange:function(oldValue, value){
            console.log(oldValue,value)
          },
          handleResize:function(event){
            this.fullWeight=document.documentElement.clientWidth+"px"
            this.fullHeight=document.documentElement.clientHeight+"px"
            this.h=document.documentElement.clientHeight
            this.w=document.documentElement.clientWidth
          }

        }
    }
</script>
<style>
  #home{
    background-color: #e0e0e0;
  }
    #finfo{
      padding: 20px;
    }
    #nav{
      z-index: 2;
    }
    #logo{
        position: relative;
        top: 0;
        left: 0;
    }
    #logo_img{
      -webkit-animation:rotateImg 60s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
       z-index: 0;
    }
    @-webkit-keyframes rotateImg {
      0% {transform : rotate(0deg);}
      100% {transform : rotate(360deg);}
    }
    @keyframes logoAnimate {
      0% {transform : rotate(0deg);}
      100% {transform : rotate(360deg);}
    }
    /*.logoAnimate-enter-active,.logoAnimate-leave-active{
      animation: opacity 5s;
    }
    .logoAnimate-enter, .logoAnimate-leave-to {
      opacity: 0;
    }*/
    
</style>

