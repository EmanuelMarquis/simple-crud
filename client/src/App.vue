<script setup>
import Form from './components/Form.vue'
</script>

<template>
  <!-- <div id="form-container">
    <Form/>
  </div> -->
  <RouterView/>
</template>

<style scoped>
#form-container {
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100vh;
}
</style>
