import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'font-awesome-webpack'
import VueRouter from "vue-router"

import App from './App.vue'
import Home from './home.vue'
import Espsnow from "./esp32snow.vue"
import Pano from "./panorama.vue"
import * as THREE from 'three'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
import ECharts from 'vue-echarts'

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueSocketio, socketio('api.whyengineer.com'));
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