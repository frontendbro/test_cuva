import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import vClickOutside from "v-click-outside";

Vue.config.productionTip = false;
Vue.use(vClickOutside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
