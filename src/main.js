import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import VueLoading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';

import OtpInput from "@bachdgvn/vue-otp-input";


// import moment from 'moment'

// Vue.prototype.moment = moment

// import VueHtmlToPaper from 'vue-html-to-paper';

  // In main.js
// import LoadScript from 'vue-plugin-load-script';



// import VueToastify from "vue-toastify";


require('vue2-animate/dist/vue2-animate.min.css')


// Vue.component("v-otp-input", OtpInput);



// Vue.use(VuePageTransition)

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
.use(VueLoading)
.use(VueAxios, axios)
.use(Toast)
// .use(moment)
// .use(VueHtmlToPaper)
.component("v-otp-input", OtpInput)
.mount('#app')
