import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入组件库
import jemLib from '../packages'
// 注册组件库
Vue.use(jemLib)

new Vue({
	render: h => h(App)
}).$mount('#app')
