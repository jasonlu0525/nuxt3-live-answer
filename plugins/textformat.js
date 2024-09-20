export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", (el, binding) => {
    const modfierConditions = {
      uppercase: binding.value.toUpperCase(),
      lowercase: binding.value.toLowerCase(),
    };

    el.innerText = modfierConditions[binding.arg];
  });
});
