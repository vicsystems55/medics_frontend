import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// import Popper from 'vue-popperjs';
// import 'vue-popperjs/dist/vue-popper.css';

// import 'jquery/src/jquery.js';
// import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import pusher from 'pusher-js'

// try {
//   window.Popper = require('popper.js').default;
//   window.$ = window.jQuery = require('jquery');

//   require('bootstrap');
 
  
// } catch (e) {}



Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

// axios.defaults.baseURL = 'https://localhost:3030';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

createApp(App)

.use(store)
.use(router)
.use(VueAxios, axios)
.use(Toast)
.mount('#app')
