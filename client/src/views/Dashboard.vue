<script setup>
import { cubes, getCubes } from '../services/consumer';
import { RouterLink } from 'vue-router';
import Cube from '../components/Cube.vue';
import Navbar from '../components/Navbar.vue';
</script>
<template>
    <div>
        <Navbar/>
        <ul v-if="dataReady" v-for="cube in cubes">
            <RouterLink :to="'/cube/' + cube.id">
                <Cube :color="cube.color" :msg="cube.msg"/>
            </RouterLink>
        </ul>
        <input id="create-btn" type="button" value="+" @click="$router.push('/create')" />
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
<style scoped>

#create-btn {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    font-size: 3rem;

    position: fixed;
    bottom: 1.3rem;
    right: 1rem;
}

div {
    height: 100vh;
}

</style>