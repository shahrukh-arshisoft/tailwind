<!-- STATIC PROPS -->
<template>
  <h1>firstname:{{ firstname }},lastname:{{ lastname }}</h1>
</template>
<script setup>
const props = defineProps(["firstname", "lastname"]);
</script>
