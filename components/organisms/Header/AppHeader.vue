<template>
  <header>
    <div class="logo-area">
      <img src="@/assets/img/rocket.png" alt="rocket" />
    </div>
    <nav class="nav-area">
      <ul class="nav-area-list">
        <li v-for="(page, key) in pageList" :key="key">
          <nuxt-link to="#">{{ page.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
const pageList = reactive([
  { title: "案件を探す", to:'/' },
  { title: "ログイン" , to:'/login' },
  { title: "新規登録" , to:'/registration'},
]);
</script>

<style lang='scss' scoped>
header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $light-gray;
  background: white;
}
.logo-area {
  img {
    width: 32px;
    height: auto;
  }
}
.nav-area {
  margin-left: auto;
  margin-right: 40px;
  &-list {
    display: flex;
    gap: 20px;
  }
  a {
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
