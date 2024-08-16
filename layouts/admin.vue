<script lang="ts" setup></script>

<template>
  <header>
    <ul class="list">
      <li>
        <NuxtLink to="/">前往 前台首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">前往 前台 About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin">後台首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin/order">後台訂單</NuxtLink>
      </li>
    </ul>
  </header>
  <slot />
  <footer>
    <h5>
      admin 模板的表尾
    </h5>
  </footer>
</template>

<style scoped></style>
