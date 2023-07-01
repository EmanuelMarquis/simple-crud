<script setup>
import { createCube } from '../services/consumer';
import Navbar from '../components/Navbar.vue';
import Cube from '../components/Cube.vue';
</script>

<template>
    <div>
        <Navbar back="/"/>
        <span>
            <Cube :color="color" :msg="msg"/>
            <input v-model="msg" type="text" placeholder="message" maxlength="32"/>
            <input v-model="color" type="color"/>
            <input type="button" value="create" @click="async () => {await createCube(msg, color); $router.push('/')}"/>
        </span>
    </div>
</template>
<script>
export default {
    data: () => {return {
        msg: '',
        color: '#ff88ff',
    }},
    methods: {
    }
}
</script>

<style scoped>
span {
    display: grid;
    justify-items: center;
    gap: 0.5rem;
    padding-top: 2rem;
}

input[type="text"] { 
    padding: 0.5rem 0 0.5rem 0;
    font-size: inherit;
    border: solid;
    border-radius: 0.5rem;
    color: var(--accent-color);
    outline: none;
    text-indent: 0.5rem;
}

input[type="text"]:focus { 
    color: var(--dark-accent-color);
} 

input[type="text"]::placeholder { 
    color: var(--accent-color);
}

input[type="text"]:focus::placeholder { 
    color: var(--dark-accent-color);
}

input[type="button"] {
    font-size: inherit;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 0.5rem;
}

div {
    height: 100vh;
}

@media (max-width: 449px) {
    input[type="text"] { 
        width: 12rem;
    }

    input[type="button"] {
        margin-top: 8.5rem;
    }
}
</style>