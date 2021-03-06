// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/components/App';
import router from '@/router';
import store from '@/store';
import VueFilters from '@/filters';

Vue.config.productionTip = false;

Vue.use(VueFilters);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
