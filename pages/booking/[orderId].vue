<script setup>
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute();
const { orderId } = route.params;

const token = useCookie("accountToken");
const orderInfo = ref({});

const { data, error } = await useFetch(`/api/v1/orders/${orderId}`, {
  baseURL: "https://nuxr3.zeabur.app",
  method: "GET",
  headers: {
    Authorization: token.value,
  },
});

orderInfo.value = data.value?.result;
</script>

<template>
  <main>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="d-flex flex-column flex-md-row align-items-md-center">
            <Icon
              class="p-2 display-4 rounded-circle"
              icon="material-symbols:check"
            />
            <div class="fs-1">
              <h1 class="fw-bold">恭喜，{{ orderInfo.userInfo?.name }}！</h1>
              <p class="mb-0 fw-bold">您已預訂成功</p>
            </div>
          </div>
          <p class="fw-medium">
            我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
          </p>

          <hr class="my-5" />

          <h2 class="mb-3 fs-5 fw-bold">訂房人資訊</h2>
          <div class="mb-3">
            <p class="mb-2 fw-medium">姓名</p>
            <span class="fw-bold">{{ orderInfo.userInfo?.name }}</span>
          </div>
          <div class="mb-3">
            <p class="mb-2 fw-medium">手機號碼</p>
            <span class="fw-bold">{{ orderInfo.userInfo?.phone }}</span>
          </div>
          <div class="mb-3">
            <p class="mb-2 fw-medium">電子信箱</p>
            <span class="fw-bold">{{ orderInfo.userInfo?.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
