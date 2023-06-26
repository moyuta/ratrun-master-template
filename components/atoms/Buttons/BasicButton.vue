<template>
  <button @click="$emit('clickSubmit')" type="button">{{ text }}</button>
</template>

<script setup lang='ts'>
const emit = defineEmits(["clickSubmit"]);
const props = defineProps({
  text: {type: String,default:'送信'}
})
</script>

<style lang="scss" scoped>
button{
    background-color: #F86986;
    border-radius: 10px;
    border: none;
    padding: 15px 20px;
    color: white;
    font-weight: bold;
}
</style>