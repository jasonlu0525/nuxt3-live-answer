<script setup>
defineProps({
    imageSrc: String,
    altText: String,
})
</script>

<template>
    <div class="product-image">
        <img :src="imageSrc" :alt="altText" />
    </div>
</template>

<style scoped>
.product-image img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}
</style>