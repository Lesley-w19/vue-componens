import Vue from "vue";
import App from "./App.vue";
import ButtonsGl from "./components/global/ButtonsGl.vue";

Vue.config.productionTip = false;

Vue.component("button-message", ButtonsGl);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// Vue.component("App", {
//   template: "<div>Hello</div>",
// });
// new Vue({
//   el: "#app",
// });
