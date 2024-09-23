<script setup>
import { useLoading } from "vue-loading-overlay";

const $loading = useLoading({
  backgroundColor: "green",
  loader: "dots",
  "is-full-page": false,
});

function openLoading() {
  const loader = $loading.show();
  setTimeout(() => {
    loader.hide();
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
