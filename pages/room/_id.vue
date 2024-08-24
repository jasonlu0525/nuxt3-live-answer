<script setup>
const route = useRoute();
const routr = useRouter();
</script>

<template>
  <h2>房型詳細頁面 {{ route.fullPath }}</h2>

  <button @click="routr.go(-1)">回上一頁</button>
</template>

<style scoped></style>
