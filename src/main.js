import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import "popper.js";
import "./assets/app.scss";

window.$ = window.jQuery = jQuery;

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
