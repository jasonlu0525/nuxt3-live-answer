<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { newsList, isLoading, getNews } = useHome();
await getNews()

</script>

<template>
  <div class="container">
    <h1>
      最新消息
    </h1>
    <NewsCard v-for="news in newsList" :key="news.id" v-bind="news" />
    <ClientOnly>
      <loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>


<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>