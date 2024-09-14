<script setup>
const { $swal } = useNuxtApp();
const router = useRouter();

const userLoginObject = ref({
  email: "0@gmail.com",
  password: "A1111111",
});

const loginAccount = async (requsetBody) => {
  try {
    const { token } = await $fetch("/user/login", {
      baseURL: "https://nuxr3.zeabur.app/api/v1",
      method: "POST",
      body: {
        ...requsetBody,
      },
    });

    const auth = useCookie("auth", {
      path: "/",
    });
    auth.value = token;

    await $swal.fire({
      position: "center",
      icon: "success",
      title: "登入成功",
      showConfirmButton: false,
      timer: 1500,
    });

    // 跳轉到/orders 頁面
    router.push("/orders");
  } catch (error) {
    const { message } = error.response._data;
    $swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
</script>

<template>
  <div class="bg-light py-3 py-md-5 vh-100">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="h3 mb-4">登入</h2>
          <form @submit.prevent="loginAccount(userLoginObject)">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="example@gmail.com"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
                v-model="userLoginObject.email"
              />
              <label for="email">信箱 <span class="text-danger">*</span></label>
            </div>

            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入 8 碼以上密碼"
                pattern=".{8,}"
                required
                v-model="userLoginObject.password"
              />
              <label for="password"
                >密碼 <span class="text-danger">*</span></label
              >
            </div>
            <div class="d-flex gap-4">
              <button class="btn btn-lg btn-primary w-50" type="submit">
                登入
              </button>
              <NuxtLink
                to="/register"
                class="btn btn-lg btn-outline-primary w-50"
              >
                還沒有帳號
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
