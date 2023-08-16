<template>
  <div class="basic-card">
    <p class="title">{{ title }}</p>
    <div class="flex">
      <img src="@/assets/svg/money.svg" alt="" />
      <p>
        <span class="emphasize">{{ unit_price }}</span> 万円/月額
      </p>
    </div>
    <div class="flex">
      <img src="@/assets/svg/document.svg" alt="" />
      <p>{{ contract }}</p>
    </div>
    <div class="flex">
      <img src="@/assets/svg/map.svg" alt="" />
      <p>{{ area }}</p>
    </div>
    <div class="flex">
      <img src="@/assets/svg/script.svg" alt="" />
      <p>{{ language }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  unit_price: {
    type: Number,
    default: "",
  },
  contract: {
    type: String,
    default: "",
  },
  area: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.basic-card {
  border: 1px solid gray;
  width: 350px;
  padding: 10px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
}
.emphasize {
  font-size: 18px;
  font-weight: bold;
  color: #f86986;
}
.flex {
  display: flex;
  align-items: center;
  gap: 10px;
}
img {
  width: 18px;
  height: 18px;
}
</style>
