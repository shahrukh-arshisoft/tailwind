<template>
  <div class="flex flex-col items-center justify-center">
    <div class="justify-center" style="width: 502px">
      <h1 class="flex items-center mt-72 mb-6 justify-center sum">
        Forgot Password
      </h1>

      <div>
        <Inputs
          id="Username or email"
          placeholder=""
          label=" Username or email "
        />
      </div>
      <div><Button text="Reset Password" /></div>
    </div>
  </div>
</template>

<script setup>
import Inputs from "./Inputs.vue";
import Button from "./Button.vue";
</script>
