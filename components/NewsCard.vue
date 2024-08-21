<script setup>
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

<style lang="scss" scoped>
.card {
  display: flex;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &-image {
    flex: 1;
    max-width: 40%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &-body {
    flex: 2;
    padding: 20px;
  }
  &-title {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  &-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    margin-top: 10px;
  }

  &-timestamps {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 0.875rem;
    color: #888;

    p {
      margin: 5px 0;
    }
  }
}
</style>
