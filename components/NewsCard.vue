<script setup lang="ts">
defineProps({
    _id: String,
    title: String,
    image: String,
    description: String,
    createdAt: String,
    updatedAt: String,
});
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img :src="image" :alt="title" />
        </div>
        <div class="card-body">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-description">
                {{ description }}
            </p>
            <div class="card-timestamps">
                <p><strong>Created At:</strong> {{ createdAt?.split("T")[0] }}</p>
                <p><strong>Updated At:</strong> {{ updatedAt?.split("T")[0] }}</p>
            </div>
        </div>
    </div>
</template>

<style src="@/assets/stylesheets/components/card.scss"></style>
