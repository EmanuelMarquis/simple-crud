<script setup>
import { ref } from 'vue';
import { getCubes } from '../services/consumer';
import { onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';

let cubes = ref({})

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