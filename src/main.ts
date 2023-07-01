import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@router/index';

import 'ant-design-vue/dist/antd.css';
import 'uno.css';
import '@styles/_base.scss';

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');
