<script setup>
import { createCube } from '../services/consumer';

</script>

<template>
    <p>Here u create cubes:</p>
    <span>
        <input v-model="msg" type="text" placeholder="messgae" maxlength="32"/>
        <input v-model="color" type="color"/>
        <RouterLink to="/"><input type="button" value="create" @click="async () => await createCube(msg, color)"/></RouterLink>
    </span>
</template>

<script>
export default {
    data: () => {return {
        msg: '',
        color: '#ffffff'
    }}
}
</script>

<style scoped>
span {
    display: flex;
    gap: 1rem;
}
</style>