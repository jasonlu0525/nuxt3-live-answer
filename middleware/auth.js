export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("accountToken");

  if (!token.value) {
    return navigateTo("/login");
  }
  const { data, errors } = await useFetch("/api/v1/user/check", {
    baseURL: "https://nuxr3.zeabur.app",
    method: "GET",
    headers: {
      Authorization: token.value,
    },
  });

  if (errors?.value) {
    alert("請先登入");
    return navigateTo("/login");
  }
});
