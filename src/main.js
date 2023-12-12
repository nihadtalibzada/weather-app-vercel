import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from '@/App';
import vuetify from '@/plugins/vuetify'
import store from '../src/store';
import constants from './config/constants';

window.$store = store;
Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'en-US', // set locale
  messages: {
    'da-DK': require('../src/translations/da-DK.json'),
    'en-US': require('../src/translations/en-US.json'),
  },
});

Vue.prototype.$primaryColor = '#000';
Vue.prototype.$constVariables = constants;

try {
  new Vue({
    store,
    vuetify,
    i18n,
    render: h => h(App)
  }).$mount('#app');
} catch (error) {
  Vue.rollbar.error('Uncaught exception; caught in main.js', error);
}