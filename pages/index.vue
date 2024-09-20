<script setup>
const message = ref("A1B2c3deFGhijk");
const time = ref(1730427600000);
</script>

<template>
  <div class="container py-3">
    <h2>自訂英文文字大小寫轉換指令</h2>
    <p v-textformat:lowercase="message"></p>
    <p v-textformat:uppercase="message"></p>

    <h2>自訂時間轉換指令</h2>
    <p v-timeformat="time"></p>
  </div>
</template>

<style scoped>
p {
  font-size: 20px;
}
</style>
