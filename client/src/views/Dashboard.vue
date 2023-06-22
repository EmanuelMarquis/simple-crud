<script setup>
import { getCubes, getData } from '../services/consumer';
import { onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import Cube from '../components/Cube.vue';

onBeforeMount(async () => {
    getData().cubes.value = await getCubes()
})
</script>

<template>
    <div>
        <p>Here you see the existing cubes:</p>
        <p>{{ getData().cubes }}</p>
        <ul v-for="cube in getData().cubes">
            <RouterLink :to="'/cube/' + cube.id">
                <Cube :color="cube.color" :msg="cube.msg"/>
            </RouterLink>
        </ul>
        <RouterLink to="/create"><input type="button" value="new cube" /></RouterLink>
    </div>
</template>