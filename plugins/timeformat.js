export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("timeformat", {
    mounted(el, binding) {
      const convertTimeformat = new Date(binding.value)
        .toLocaleString("zh-Hant", {
          hour12: false,
        })
        .replaceAll("/", "-");

      el.innerText = convertTimeformat;
    },
  });
});
