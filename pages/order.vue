<script setup>
// 1. 從 useBookingStore 取出資料 bookingResult
const roomStore = useBookingStore();
const { bookingResult } = storeToRefs(roomStore);
</script>

<template>
  <div class="container mt-5">
    <template v-if="bookingResult.name">
      <!-- 2. 渲染至 HTML 模板 -->
      <div class="row">
        <div class="col-lg-4">
          <h2 class="mb-3">預訂成功 !</h2>
          <h3 class="mb-3">訂房人資訊</h3>
          <h4>姓名</h4>
          <p>{{ bookingResult.user.name }}</p>
          <h4>手機號碼</h4>
          <p>{{ bookingResult.user.phone }}</p>
        </div>
        <div class="col-lg-8">
          <h3 class="mb-3">房型資訊</h3>
          <p class="fs-1">
            {{ bookingResult.name }}
          </p>
          <hr />
          <section class="mb-5">
            <h3>房型基本資訊</h3>
            <ul class="list-unstyled d-flex">
              <li>
                <div class="badge bg-light text-dark fs-5">
                  {{ bookingResult?.areaInfo }}
                </div>
              </li>
              <li>
                <div class="badge bg-light text-dark fs-5">
                  {{ bookingResult?.bedInfo }}
                </div>
              </li>
              <li>
                <div class="badge bg-light text-dark fs-5">
                  {{ bookingResult?.bedInfo }}
                </div>
              </li>
            </ul>
          </section>
          <section class="mb-5">
            <h3>房間格局</h3>
            <ul class="list-unstyled d-flex">
              <li
                class="mx-1"
                v-for="layout in bookingResult.layoutInfo"
                :id="layout.title"
              >
                <div class="badge bg-light text-dark fs-5">
                  {{ layout.title }}
                </div>
              </li>
            </ul>
          </section>
          <section class="mb-5">
            <h3>房內設備</h3>
            <ul class="list-unstyled d-flex flex-wrap">
              <li
                class="mx-1"
                v-for="layout in bookingResult.facilityInfo"
                :id="layout.title"
              >
                <div class="badge bg-light text-dark fs-5">
                  {{ layout.title }}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </template>
    <template v-else>
      <h1>目前沒有預訂資訊</h1>
    </template>
    <NuxtLink class="btn btn-primary" to="/">回上一頁</NuxtLink>
  </div>
</template>
