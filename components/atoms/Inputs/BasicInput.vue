<template>
  <div class="basic-input">
    <label>{{ title }}</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="
        $emit('inputValue', {
          name: name,
          value: ($event.target as HTMLInputElement).value,
        })
      "
    />
  </div>
</template>

<script setup lang="ts">
type InputType = "text" | "number" | "email" | "password";
const props = defineProps({
  type: {
    type: String as () => InputType,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["inputValue"]);
</script>

<style lang="scss" scoped>
.basic-input {
  width: 100%;
}
input {
  width: 100%;
  border: 1px solid $light-gray;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  box-sizing: border-box;
  &:focus {
    border: 2px solid #75d3d7;
  }
}
</style>
