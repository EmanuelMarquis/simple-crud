<script setup>
import {cubes, deleteCube } from '../services/consumer';
import Cube from '../components/Cube.vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Popover from '../components/Popover.vue';
import { ref } from 'vue';

let cube = ref(), isPopoverActive = ref(false)

try {
    cube.value = cubes.value.find(c => c.id == useRoute().params.id) 
} catch (e) {
    console.log(e)
}

</script>
<template>
    <Navbar back="/"/>
    <div id="form">
        <Cube :color="cube?.color" :msg="cube?.msg"/>
        <p id="msg">{{ cube?.msg }}</p>
        <span>
            <input type="button" value="edit" @click="() => $router.push('/cube/' + cube?.id + '/edit')"/>
            <input type="button" value="delete" @click="() => isPopoverActive = true"/>
        </span>
    </div>
    <div v-if="isPopoverActive" id="pop-over">
        <Popover
            :text="`Do you want to delete Cube#${cube?.id} ?`" 
            action-text="delete" 
            :action="async() => {
                try {await deleteCube(cube?.id)} 
                catch (error) {console.log(e)};
                $router.push('/')
            }"
            :cancel-action="() => isPopoverActive = false"
        />
    </div>
    
</template>

<style scoped>

#form {
    padding-top: 3rem;
    display: grid;
    justify-items: center;
}

span {
    margin-top: 5.5rem;
    display: flex;
    gap: 1rem;
}

input[type="button"] {
    font-size: inherit;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

#msg {
    color: var(--accent-color);
}

#pop-over {
    display: grid;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(21, 25, 32, 0.575);
}

</style>