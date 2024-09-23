import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LoadingPlugin);
});
