<template>
  <div class="btn flex justify-center mb-8 md:mb-11">
    <button type="submit">{{ text }}</button>
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
