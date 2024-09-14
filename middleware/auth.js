export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp();
  const { $swal, isHydrating, payload } = useNuxtApp();
  if (import.meta.client && isHydrating && payload.serverRendered) {
    return;
  }
  const token = useCookie("auth");
  if (!token.value) return navigateTo("/login");

  try {
    await $fetch("/user/check", {
      method: "GET",
      baseURL: "https://nuxr3.zeabur.app/api/v1",
      headers: {
        Authorization: token.value,
      },
    });
  } catch (error) {
    token.value = null;
    return navigateTo("/login");
  }
});
