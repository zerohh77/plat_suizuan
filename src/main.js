//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

//Vue.config.productionTip = false
//Vue.use(ElementUI)

/*new Vue({
    render: h => h(App),
}).$mount('#app')*/
createApp(App).use(router).mount('#app')
let app = createApp(App);
app.use(ElementPlus); //需要加入的代码
app.mount('#app');
