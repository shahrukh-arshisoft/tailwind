<template>
  <div class="flex flex-col items-center justify-center h-screen w-full">
    <div
      class="justify-center items-center responsive arshisoft"
      style="width: 100%; max-width: 502px !important"
    >
      <h1 class="flex items-center h-screen mb-20 justify-center khaliq sum">
        Forgot Password
      </h1>

      <div>
        <!-- Pass a vibrant color to your regular input -->
        <Inputs
          id="Username or email"
          placeholder=""
          label=" Username or email "
        />
      </div>
      <div v-if="error">
        <!-- For an error input, let's make it red -->
        <Inputs
          value="No account found for this login"
          placeholder=""
          isError="true"
        />
      </div>
      <div><Button text="Reset Password" /></div>
      <div class="borderbtm mb-4"></div>
      <div class="flex flex-row-reverse lasttext">
        <a href="/">Back to Sign in</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Inputs from "./Inputs.vue";
import Button from "./Button.vue";
import { ref } from "vue";

// const errorBackgroundColor = ref("blue");
const error = ref(true);
</script>
<style>
.error-background {
  background-color: blue;
}
</style>
