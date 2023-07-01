<script setup>
import { useRoute } from 'vue-router';

defineProps({
    back: String
})

let navbarTitle, haveBackAction = true
const route = useRoute()

if(route.params.id)
    navbarTitle = (route.fullPath.endsWith("/edit")? "Edit " : "") + "Cube#" + route.params.id

else if(route.fullPath === "/create") 
    navbarTitle = "Create Cube"

else if(route.fullPath === "/")
    {navbarTitle = "Dashboard"; haveBackAction = false}

else navbarTitle = "undefined"

</script>
<template>
    <nav>
        <button v-if="haveBackAction" @click="() => $router.push(back)"><span class="material-symbols-outlined">arrow_back_ios</span></button>
        {{ navbarTitle }}
    </nav>
</template>
<style scoped>
nav {
    padding: 1rem 0 1rem 0;
    background-color: var(--accent-color);
    text-align: center;
}

button {
    position: fixed;
    left: 1rem;
    background: none;
    border: 0;
    color: var(--text-color);
}
</style>