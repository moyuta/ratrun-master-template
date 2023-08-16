<template>
  <button @click="$emit('clickSubmit')" type="button">{{ text }}</button>
</template>

<script setup lang="ts">
const emit = defineEmits(["clickSubmit"]);
const props = defineProps({
  text: { type: String, default: "送信" },
});
</script>

<style lang="scss" scoped>
button {
  background-color: #2e9a9e;
  border-radius: 40px;
  border: none;
  color: white;
  font-weight: bold;
  height: 50px;
}
</style>
