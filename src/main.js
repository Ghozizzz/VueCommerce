import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import {fb} from "./firebase";
import VueFirestore from "vue-firestore";
import Vue2Filters from 'vue2-filters'

window.$ = window.jQuery = jQuery;

import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Swal = Swal;
window.Toast = Toast;
 
Vue.use(Vue2Filters)
Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
});

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('AddToCart', require('./components/AddToCart.vue').default);
Vue.component('ProductList', require('./sections/ProductList.vue').default);

Vue.config.productionTip = false;

let app = '';
fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    // User is signed in.
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});