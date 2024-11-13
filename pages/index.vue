<script setup>
const { $useLoading } = useNuxtApp();

const loadingHandler = $useLoading({
  backgroundColor: "green",
  loader: "dots",
  "is-full-page": false,
});

function openLoading() {
  const loader = loadingHandler.show();
  setTimeout(() => {
    loader.hide();
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
