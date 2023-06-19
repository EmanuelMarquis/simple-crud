<script setup>
import { ref } from 'vue';
import { getCubes } from '../services/consumer';
import { onBeforeMount } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

let cubes = ref({})

useRouter().afterEach(async (to, from) => {
    if(!(to.fullPath === "/")) return
    cubes.value = await getCubes()
})

onBeforeMount(async () => {
    cubes.value = await getCubes()
})
</script>

<template>
    <div>
        <p>Here you see the existing cubes:</p>
        <p>{{ cubes }}</p>
        <RouterLink to="/create"><input type="button" value="new cube" /></RouterLink>
    </div>
</template>