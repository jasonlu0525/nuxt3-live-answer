<script setup>
defineProps({
    buttonText: String,
})
</script>

<template>
    <button class="product-button">{{ buttonText }}</button>
</template>

<style scoped>
.product-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
}

.product-button:hover {
    background-color: #0056b3;
}
</style>