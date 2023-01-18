import { createApp } from 'vue';

//路由
import router from './router';

//store
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
//css
import 'virtual:windi.css';
import './style.css';

//雪碧图方式使用svg，包括图标，参考： https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
//添加图标时直接把svg文件放入src/assets/svgs下即可
import 'virtual:svg-icons-register';
 

import App from './App.vue';

const app = createApp(App);
//use router
app.use(router);
//use store
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
//全局自定义组件
 
app.mount('#app');
