<script setup>
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const modules = ref([Autoplay, Navigation, Pagination]);
const { data: rooms } = await useFetch("/api/v1/rooms", {
  baseURL: "https://nuxr3.zeabur.app",
});
</script>

<template>
  <main>
    <div class="container mt-5">
      <h2 class="fs-1 fw-bold">各種房型，任您挑選</h2>
      <ul class="list-unstyled">
        <li
          v-for="room in rooms.result"
          :key="room._id"
          class="card flex-lg-row mb-3"
        >
          <div class="row">
            <div class="col-lg-6">
              <Swiper
                class="h-100"
                :modules="modules"
                :slides-per-view="1"
                :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
                :pagination="{
                  el: '.swiper-pagination',
                  type: 'bullets',
                  clickable: true,
                }"
                :autoplay="{
                  delay: 5000,
                }"
              >
                <SwiperSlide
                  v-for="(image, index) in room.imageUrlList"
                  :key="index"
                >
                  <img
                    class="w-100 h-100 object-fit-cover"
                    :src="image"
                    :alt="`room-${index}`"
                    loading="lazy"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="col-lg-6">
              <div class="card-body">
                <h3 class="card-title fs-2 fw-bold">
                  {{ room.name }}
                </h3>
                <p class="card-text fw-medium">
                  {{ room.description }}
                </p>
                <ul class="d-flex gap-4 list-unstyled mb-5">
                  <li class="border rounded-3 p-3">
                    <p class="mb-0 fw-bold text-nowrap">
                      {{ room.areaInfo }}
                    </p>
                  </li>
                  <li class="border rounded-3 p-3">
                    <p class="mb-0 fw-bold">
                      {{ room.bedInfo }}
                    </p>
                  </li>
                  <li class="border rounded-3 p-3">
                    <p class="mb-0 fw-bold">2-{{ room.maxPeople }} 人</p>
                  </li>
                </ul>
                <hr />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 fw-bold">NT$ {{ room.price }}</p>
                  <NuxtLink
                    :to="`/rooms/${room._id}`"
                    class="icon-link icon-link-hover"
                  >
                    <Icon class="bi fs-5" icon="mdi:arrow-right" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style></style>
