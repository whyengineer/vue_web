<template>
    <Carousel v-model="value" loop :style="{width:width,height:height}" id="carousel">
        <CarouselItem class="carousel1" :style="{width:width,height:height}">
            <div class="demo-carousel" >
                <Fcanvas
                :winHeight="cavansH"
                :winWidth="cavansW">
                </Fcanvas>
                        <img src="https://img.whyengineer.com/logo.png" :style="{width:logoW,height:logoH,top:logoTop,left:logoLeft}" id="logoimg">
                        <p id="myname" :style="{top:nameTop,left:nameLeft,fontSize:nameSize}">WhyEngineer</p>
            </div>
        </CarouselItem>
        <!-- <CarouselItem class="carousel2" :style="{width:width,height:height}">
            <div class="demo-carousel">
                <img src="./assets/esp32_snow.png" id="snowimg" :style="{width:snowW,height:snowH,top:snowTop,left:snowLeft}">
            </div>
        </CarouselItem> -->
        <!-- <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem> -->
    </Carousel>
</template>
<script>
import Fcanvas from "./Fcanvas.vue"
    export default {
        components:{
          Fcanvas
        },
        data () {
            return {
                value: 0,
                logoH: document.documentElement.clientHeight*2/10+"px",
                logoW: document.documentElement.clientHeight*2/10+"px",
                snowH:"375px",
                snowW:"750px",
                snowTop:document.documentElement.clientHeight/4-200+"px",
                snowLeft:document.documentElement.clientWidth/2-375+"px",
                cavansW:document.documentElement.clientWidht,
                cavansH:document.documentElement.clientHeight*2/4,
                nameLeft:document.documentElement.clientWidth/3.2+"px",
                nameTop:document.documentElement.clientHeight*2/8+"px",
                logoLeft:-document.documentElement.clientHeight*2/20+document.documentElement.clientWidth/2+"px",
                logoTop:"20%",
                nameSize:document.documentElement.clientWidth*2/30+"px",
            }
        },
        props: {

            height:{
                type:String,
                default:document.documentElement.clientHeight*2/4+"px"
            },
            width:{
                type:String,
                default:document.documentElement.clientWidth-17+"px"
            }
        }
    }
</script>
<style>
    #carousel{
        margin: 0px;
        padding: 0px;
    }
    .carousel1{
        background: #e0e0e0;
    }
    .carousel2{
        background: #081318;
    }
    #myname{
        position: absolute;
        top:0px;
        left: 0px;
        margin:0px;
        padding:0px;
        font-family:"Impact";
        color: black;
    }
    #logoimg{
      -webkit-animation:rotateImg 60s linear infinite;
      position: absolute;
      top: 50px;
      left: 50px;
       z-index: 0;
    }
    #snowimg{
        position: relative;
        top:0px;
        left: 0px;
    }
    @-webkit-keyframes rotateImg {
      0% {transform : rotate(0deg);}
      100% {transform : rotate(360deg);}
    }
    @keyframes logoAnimate {
      0% {transform : rotate(0deg);}
      100% {transform : rotate(360deg);}
    }
    /*#logoimg{
        position: absolute;
        top:0;
        left: 0;
    }*/
</style>
