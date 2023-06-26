<script setup>
import {cubes, deleteCube } from '../services/consumer';
import Cube from '../components/Cube.vue';
import { useRoute } from 'vue-router';

const cube = cubes.value.find(cube => cube.id == useRoute().params.id)

</script>
<template>
    <p>Here u can see a cube</p>
    <Cube :color="cube.color" :msg="cube.msg"/>
    <span>
        <RouterLink :to="'/cube/' + cube.id + '/edit'"><input type="button" value="edit"/></RouterLink>
        <RouterLink to="/"><input type="button" value="delete" @click="async() => await deleteCube(cube.id)"/></RouterLink>
    </span>
</template>

<style scoped>

span {
    display: flex;
    gap: 1rem;
}

</style>