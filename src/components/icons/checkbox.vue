<template>
  <label class="custom-checkbox" :class="{ checked: isChecked }">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="toggleCheckbox"
      style="display: none"
    />
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        :fill="isChecked ? '#4CAF50' : '#D9D9D9'"
        width="100%"
        height="100%"
        :style="{ fill: isChecked ? '#1F92D0' : '' }"
      />
      <path
        v-if="isChecked"
        d="M5.5 12.5L10 17L19.5 7"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </label>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};
</script>

<style scoped>
.custom-checkbox {
  cursor: pointer;
  display: inline-block;
}
</style>
