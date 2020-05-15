import Vue from 'vue';
import toastr from 'toastr';

import './configs';
import './services/ApiService';

import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import App from './App.vue';

import 'toastr/build/toastr.min.css';

Vue.config.productionTip = false;

toastr.options = { maxOpened: 1 };
Vue.prototype.$toastr = toastr;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
