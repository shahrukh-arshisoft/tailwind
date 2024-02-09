<template>
  <section class="flex flex-col md:flex-row h-screen">
    <!-- Left side (Image) -->
    <div class="md:w-3/5 flex items-center bgclr hide">
      <imagesvg />
    </div>

    <!-- Right side (Form) -->
    <div class="hello md:w-2/5 mt-32 flex justify-center">
      <form class="w-full md:w-3/4 lg:w-2/3">
        <div><Headings /></div>

        <!-- <h1 class="heading mb-2 text-center md:text-left">Sign in</h1>
        <p class="subheading mb-4 text-center md:text-left">
          To access your account
        </p> -->

        <div>
          <Inputs
            id="username"
            placeholder=""
            label="username or email "
            name="username"
          />
          <Inputs
            id="password"
            placeholder=""
            label="password"
            name="password"
          />
          <Inputs id="gmail" placeholder="" label=" gmail " name="gmail" />
          <!-- <props :firstname="firstname" :lastname="lastname" /> -->
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <checkbox />

            <div><span class="forgottext pl-2">Remember me.</span></div>
          </div>
          <div>
            <span class="forgottext">
              <a href="/Forgotpswrd">Forgot Password?</a>
            </span>
          </div>
        </div>
        <div><Button text="Sign In" /></div>
        <div class="flex items-center justify-evenly mb-4">
          <hr />
          <span class="or">OR</span>
          <hr />
        </div>
        <div class="text-center signintext mb-4">Sign in using</div>

        <div><Allicons /></div>
        <div class="flex items-center justify-evenly mb-4">
          <hr class="lastline" />
        </div>
        <div class="flex justify-center space-x-2">
          <span class="signintext">Don't have an account?</span>
          <span class="signintext ali">Sign Up now</span>
        </div>
      </form>
    </div>
  </section>
  <!-- <props :firstname="firstname" :lastname="lastname" /> -->
</template>

<script setup>
import imagesvg from "./icons/imagesvg.vue";
import Inputs from "../components/Inputs.vue";
import Allicons from "../components/allicons.vue";
import Headings from "../components/Headings.vue";
import props from "./props.vue";
import checkbox from "./icons/checkbox.vue";
import Button from "./Button.vue";

// const firstname = ref("shahrukh");
// const lastname = ref("shamsi");
</script>
