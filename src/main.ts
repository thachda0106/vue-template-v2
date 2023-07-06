import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@routes/index';
import vuetify from '@plugins/vuetify';
import AppLink from '@components/app-link/AppLink.vue';

import 'uno.css';
import 'vuetify/styles';
import '@styles/_base.scss';

createApp(App).use(router).use(createPinia()).use(vuetify).component('AppLink', AppLink).mount('#app');
