<script setup>
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'

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
    createCube(msg, color, onCreate) {
      axios.post("/api/cubes", {msg: msg, color: color})
        .then((res) => onCreate()) // on success
    },
    async getCubes() {
      return (await axios.get("/api/cubes")).data
    },
    async getCube(id) {
      return (await axios.get(`/api/cubes/${id}`)).data
    },
    editCube(id, msg, color, onEdit) {
      axios.put(`/api/cubes/${id}`, {msg: msg, color: color})
        .then((res) => onEdit())
    },
    deleteCube(id, onDeletion) {
      axios.delete(`/api/cubes/${id}`)
        .then((res) => onDeletion())
    },
    deleteAllCubes(onDeletion) {
      axios.delete("/api/cubes")
        .then((res) => onDeletion()) // on success
    }
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
