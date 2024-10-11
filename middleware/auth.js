export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("accountToken");
  // console.log(token);

  if (!token.value) {
    return navigateTo("/login");
  }
  const { data, errors } = await useFetch("/v1/user/check", {
    baseURL: "https://nuxr3.zeabur.app",
    method: "POST",
    headers: {
      Authorization: token.value,
    },
  });
  console.log(data, errors);

  if (errors?.value) {
    alert("請先登入");
    return navigateTo("/login");
  }
});
