import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from './home.vue'
import Espsnow from "./esp32snow.vue"
import Pano from "./panorama.vue"
import * as THREE from 'three'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
import ECharts from 'vue-echarts'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueSocketio, socketio('127.0.0.1:1323'));
Vue.component('chart', ECharts)

const routes = [
    {
        path: "/esp32snow",
        component: Espsnow
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/pano",
        component:Pano
    },
    {
        path: '/', 
        redirect: '/home' 
    }
]
var router =  new VueRouter({
    routes
})

 
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
}
)