// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App.vue'
Vue.component('my-header', {    // 全局组件
  template: '<h1>我是头部全局组件</h1>'
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
