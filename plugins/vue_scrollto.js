import Vue from "vue";
import VueScrollTo from "vue-scrollto";

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 180,
  force: true,
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
