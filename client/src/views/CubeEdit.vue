<script setup>
import { useRoute } from 'vue-router';
import { editCube, cubes } from '../services/consumer';
import Navbar from '../components/Navbar.vue';
import Cube from '../components/Cube.vue'
import { ref } from 'vue';

const cube = ref(cubes?.value?.find(cube => cube.id == useRoute().params.id))

</script>
<template>
    <Navbar :back="useRoute().fullPath.replace('/edit', '')"/>
    <div id="form">
        <Cube :color="newColor" :msg="newMsg"/>
        <span>
            <input v-model="newMsg" type="text" placeholder="new message" maxlength="32"/>
            <input v-model="newColor" type="color"/>
        </span>
        <span>
            <input type="button" value="cancel" @click="$router.push('/')"/>
            <input type="button" value="save" @click="async () => {
                await editCube($route.params.id, newMsg === '' ? cube?.msg : newMsg , newColor)
                    .catch((e)=> console.log(e));
                $router.push('/')
            }"/>
        </span>
    </div>
</template>
<script>
export default {
    data: () => {return {
        newMsg: '',
        newColor: cubes?.value?.find(cube => cube.id == useRoute().params.id).color ?? '#ff88ff'
    }},
}
</script>
<style scoped>

span {
    display: flex;
    gap: 1rem;
}

input[type="text"] {
    font-size: inherit;
    width: 8rem;
    border-radius: 0.5rem;
    border: solid;
    outline: none;
    color: var(--accent-color);
    border-color: var(--accent-color);
    text-indent: 0.5rem;
}

input[type="text"]::placeholder {
    color: var(--accent-color);
}

input[type="text"]:focus { 
    border-color: var(--dark-accent-color);
    color: var(--dark-accent-color);

} 

input[type="text"]:focus::placeholder { 
    color: var(--dark-accent-color);
}

input[type="button"] {
    margin-top: 10rem;
    font-size: inherit;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

#form {
    display: grid;
    justify-items: center;
    gap: 1rem;
}

</style>