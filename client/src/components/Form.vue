<script setup>
import { ref } from 'vue'
</script>

<template><div>
  <form @submit="(e) => {e.preventDefault();}" method="post">
    <input type="text" maxlength="32" name="msg"/>
    <input type="submit"  value="create"/>
  </form>
</div></template>

<style scoped>
input {
  font-size: inherit;
  border-radius: 0.25rem;
}

input[type="text"] {
  border: solid;
}

form {
  height: fit-content;
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
</style>
