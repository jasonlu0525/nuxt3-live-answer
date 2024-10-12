<script setup>
const isFetch = ref(false);
const router = useRouter();

const loginAccount = async (userData) => {
  const accountToken = useCookie("accountToken");

  if (isFetch.value) return;
  isFetch.value = true;

  try {
    const { token } = await $fetch("/api/v1/user/login", {
      baseURL: "https://nuxr3.zeabur.app",
      method: "POST",
      body: userData,
    });

    accountToken.value = token;
    alert("登入成功 ! ");
    router.push("/rooms");
  } catch (error) {
    alert(error.data?.message);
  } finally {
    isFetch.value = false;
  }
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="px-5 px-md-0">
            <p class="mb-2 fw-bold">享樂酒店，誠摯歡迎</p>
            <h1 class="fw-bold">立即開始旅程</h1>
          </div>
          <Form @submit="loginAccount" v-slot="{ errors }">
            <div class="mb-4">
              <label class="mb-2 fw-bold" for="email"> 電子信箱 </label>
              <Field
                id="email"
                name="email"
                rules="required|email"
                class="form-control p-3 fw-medium"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入信箱"
                type="email"
              />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-4">
              <label class="mb-2 fw-bold" for="password"> 密碼 </label>
              <Field
                id="password"
                name="password"
                rules="required|min:8"
                class="form-control p-3 fw-medium"
                :class="{ 'is-invalid': errors['password'] }"
                placeholder="請輸入password"
                type="password"
              />
              <ErrorMessage name="password" class="invalid-feedback" />
            </div>
            <button
              type="submit"
              :disabled="isFetch"
              class="btn btn-primary w-100 py-3 fw-bold"
            >
              會員登入
            </button>
          </Form>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
