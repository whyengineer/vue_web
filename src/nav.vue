<template>
    <div id="fnav">
        <Menu mode="horizontal" :theme="theme1" :active-name="value1" name="nav" @on-select="whoselct" ref="clildmenu">
            <MenuItem name="1">
                <Icon type="ios-home"></Icon>
                Home
            </MenuItem>
            <Submenu name="2">
                <template slot="title">
                    <i class="fa fa-microchip"></i>
                    Board
                </template>
                <MenuGroup title="ESP32">
                    <MenuItem name="2-1">ESP32-CIRCLE</MenuItem>
                    <MenuItem name="2-2">ESP32-SNOW</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="3">
                 <i class="fa fa-wikipedia-w" aria-hidden="true"></i>
                 <!-- <a href="https://wiki.whyengineer.com" style="color:white">Wiki</a> -->
                 Wiki
            </MenuItem>
            <MenuItem name="4">
                <i class="fa fa-github" aria-hidden="true"></i>
                <!-- <a href="https://github.com/whyengineer" style="color:white">Github</a> -->
                Github
            </MenuItem>
             <MenuItem name="5">
                <i class="fa fa-info" aria-hidden="true"></i>
                <!-- <a href="https://github.com/whyengineer" style="color:white">Github</a> -->
                About
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
    import bus from "./bus.js"
    var index
    var childmenu
    export default {

        data () {
            return {
                theme1: 'light',
                value1: "1",
            }
        },
        created(){
            index=this
            console.log(index.theme1)
            bus.$on("menuclick",function(msg){
                if(typeof(index.value1)=="undefined"){
                    console.log("value1 is not defined")
                }else{
                    console.log(index.value1)
                }
                index.value1=msg
                index.$nextTick(() => {
                   childmenu.updateActiveName();
                })
            })
        },
        mounted(){
           
            childmenu=this.$refs.clildmenu
        },
        methods:{
            whoselct:function(name){
                console.log(name)
                if(name==1){
                    this.$router.push('/home')
                }
                else if(name=="2-2"){
                    //window.location.href="/esp32snow"
                    this.$router.push('/esp32snow')
                }else if(name=="2-1"){
                     this.$router.push('/pano')
                }
                else if(name==3){
                    window.open("https://wiki.whyengineer.com")
                }
                else if(name==4){
                    window.open("https://github.com/whyengineer")
                }
            }
        }
    }
</script>
<style>
    #fnav{

    }
    #fnav #right{
        position: relative;
        background: red;
    }
</style>