<template>
  <button @click="$emit('clickSubmit')" type="button">{{ text }}</button>
</template>

<script setup lang="ts">
const emit = defineEmits(["clickSubmit"]);
const props = defineProps({
  text: { type: [String, Number], default: "送信" },
});
</script>

<style lang="scss" scoped>
button {
  background-color: white;
  border-radius: 20px;
  border: 1px solid #333333;
  padding: 10px 20px;
  color: #333333;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    background: gray;
  }
}
</style>
