<template>
  <!-- :class="isError ? 'error-background' : ''" -->
  <div class="floating-group mb-4">
    <input
      class="input1"
      type="text"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :style="isError ? { 'background-color': '#F4A4A4' } : {}"
      :value="value"
    />
    <label :for="label" class="floating-label">{{ label }}</label>
  </div>

  <!-- <div class="floating-group mb-4">
    <input
      class="input1"
      type="password"
      id="password"
      name="password"
      placeholder=" "
    />
    <label for="password" class="floating-label">Password</label>
  </div> -->
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },

  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: "",
  },
});

// const props = defineProps(["id", "placeholder", "label"]);
</script>
