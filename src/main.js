// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from 'src/App';
import router from 'src/router';
import eventBus from 'src/plugins/event-bus'
import store from 'src/store';

import 'src/plugins/axios'


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    eventBus
  },
  store,
  router,
  components: { App },
  template: '<App/>',
});
