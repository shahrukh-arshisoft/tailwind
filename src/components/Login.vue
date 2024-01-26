<template>
  <!-- <section class="bg-gray-50 min-h-screen flex items-center justify-center">
    
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
    
      <div class="md:w-1/2 px-8 md:px-16">
        <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
        <p class="text-xs mt-4 text-[#002D74]">
          If you are already a member, easily log in
        </p>

        <form action="" class="flex flex-col gap-4">
          <input
            class="p-2 mt-8 rounded-xl border"
            type="email"
            name="email"
            placeholder="Email"
          />
          <div class="relative">
            <input
              class="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
            />
           
          </div>
          <button
            class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr class="border-gray-400" />
          <p class="text-center text-sm">OR</p>
          <hr class="border-gray-400" />
        </div>

        <button
          class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
        >
         
          Login with Google
        </button>

        <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
          <a href="#">Forgot your password?</a>
        </div>

        <div
          class="mt-3 text-xs flex justify-between items-center text-[#002D74]"
        >
          <p>Don't have an account?</p>
          <button
            class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
          >
            Register
          </button>
        </div>
      </div>

    
     
    </div>
  </section> -->

  <section>
    <div class="flex flex-row h-screen">
      <div class="w-3/5 flex items-center bgclr">
        <imagesvg />
      </div>
      <div class="md:w-2/5 mt-24 flex justify-center">
        <form class="" action="/action_page.php" method="POST">
          <h1 class="heading mb-2">Sign in</h1>
          <p class="subheading mb-12">To access your account</p>

          <div class="floating-group mb-4">
            <input
              class="input1"
              type="text"
              id="username"
              name="username"
              placeholder=" "
            />
            <label for="username" class="floating-label">Username</label>
          </div>
          <div class="floating-group mb-4">
            <input
              class="input1"
              type="password"
              id="password"
              name="password"
              placeholder=" "
            />
            <label for="password" class="floating-label">Password</label>
          </div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex">
              <checkbox /><span class="text3 pl-2">Remember me.</span>
            </div>
            <div class="forgottext">
              <span>Forgot Password?</span>
            </div>
          </div>
          <div class="btn flex justify-center mb-11">
            <button type="submit">Sign in</button>
          </div>
          <div class="flex items-center justify-evenly mb-4">
            <hr />
            <span class="or">OR</span>
            <hr />
          </div>
          <div class="text-center signintext mb-4">Sign in using</div>

          <div class="flex justify-center space-x-2 items-center mb-6">
            <div><googleicon /></div>
            <div><linkdinicon /></div>
            <div><facebookicon /></div>
            <div><twittericon /></div>
          </div>
          <div class="flex items-center justify-evenly mb-4">
            <hr class="lastline" />
          </div>
          <div class="flex justify-center">
            <span class="signintext"> Dont have an account ?</span>
            <span class="signintext ali"> Sign Up now</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import imagesvg from "./icons/imagesvg.vue";
import checkbox from "./icons/checkbox.vue";
import googleicon from "./icons/googleicon.vue";
import facebookicon from "./icons/facebookicon.vue";
import twittericon from "./icons/twittericon.vue";
import linkdinicon from "./icons/linkdin.vue";
</script>
