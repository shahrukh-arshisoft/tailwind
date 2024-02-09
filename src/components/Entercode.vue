<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <h1 class="heading">Enter Code</h1>
    <h4 class="signintext mb-6">
      Enter the Code you have received on (email/ <br />text) of a password
      reset.
    </h4>

    <div class="otp-field flex items-start">
      <input type="text " maxlength="1" class="mr-11" />
      <input type="text" maxlength="1" class="mr-6" />
      <input class="space" type="text" maxlength="1" />
      <input type="text" maxlength="1" />
    </div>
  </div>
</template>
<style scoped>
input {
  width: 75.6px;
  height: 70px;

  border-radius: 5px;
  margin: 0 21px;
  text-align: center;
  font-size: 20px;
  outline: none;
  background-color: #d9d9d9;
}
</style>
