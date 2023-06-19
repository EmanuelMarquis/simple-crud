<script setup>
import { ref, onBeforeMount } from 'vue'
import {createCube} from '../services/consumer';
let cubes = ref("...")

onBeforeMount(async () => {
  cubes.value = (await axios.get("/api/cubes")).data
})

</script>

<template>
<div class="form">
  <input v-model="msg" type="text" placeholder="message" maxlength="32"/>
  <input v-model="color" type="color"/>
  <input type="button" value="create" @click="() => createCube(msg, color, async ()=> cubes=await getCubes())"/>
  <input type="button" value="delete all" @click="() => deleteAllCubes(async () => cubes = await getCubes())"/>
</div>
<div class="form">
  <input v-model="id" type="number" min="1" placeholder="id"/>
  <input type="button" value="delete" @click="() => deleteCube(id, async () => cubes = await getCubes())"/>
  <input type="button" value="get cube" @click="async () => cubes = await getCube(id)"/>
  <input type="button" value="replace" @click="() => editCube(id, msg, color, async () => cubes = await getCubes())"/>
</div>
<span>{{ cubes }}</span>
</template>

<script>
export default {
  data: () => {return{
    msg: '',
    color: '#ffffff',
    id: 1
  }},
  methods: {
    
  }
}
</script>

<style scoped>
input {
  font-size: inherit;
  border-radius: 0.25rem;
}

input[type="text"] {
  border: solid;
}

.form {
  height: fit-content;
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
</style>
