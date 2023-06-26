<script setup>
import { cubes, getCubes } from '../services/consumer';
import { RouterLink } from 'vue-router';
import Cube from '../components/Cube.vue';
</script>
<template>
    <div>
        <p>Here you see the existing cubes:</p>
        <p>{{ cubes }}</p>
        <ul v-if="dataReady" v-for="cube in cubes">
            <RouterLink :to="'/cube/' + cube.id">
                <Cube :color="cube.color" :msg="cube.msg"/>
            </RouterLink>
        </ul>
        <RouterLink to="/create"><input type="button" value="new cube" /></RouterLink>
    </div>
</template>
<script>
export default {
    data() {
        return {dataReady: false}
    },
    async mounted() {
        cubes.value = await getCubes()
        this.dataReady = true
    }
}
</script>