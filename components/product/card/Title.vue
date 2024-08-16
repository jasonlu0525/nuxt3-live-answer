<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <h2 class="product-title">{{ title }}</h2>
</template>

<style scoped>
.product-title {
    font-size: 18px;
    font-weight: bold;
    margin: 16px 0 8px;
    text-align: center;
}
</style>