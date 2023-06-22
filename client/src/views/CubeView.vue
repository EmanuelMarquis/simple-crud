<script setup>
import { getData, deleteCube } from '../services/consumer';
import Cube from '../components/Cube.vue';
import { useRoute } from 'vue-router';
</script>
<template>
    <p>Here u can see a cube</p>
    <Cube :color="getData().cube.color" :msg="getData().cube.msg"/>
    <span>
        <RouterLink :to="'/cube/' + useRoute().params.id + '/edit'"><input type="button" value="edit"/></RouterLink>
        <RouterLink to="/"><input type="button" value="delete" @click="() => deleteCube(getData().cube.id)"/></RouterLink>
    </span>
</template>

<style scoped>

span {
    display: flex;
    gap: 1rem;
}

</style>