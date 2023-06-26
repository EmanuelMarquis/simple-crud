<script setup>
import { useRoute } from 'vue-router';
import { editCube } from '../services/consumer';
</script>
<template>
    <p>Here u edit ur cube :)</p>
    <span class="form">
        <input v-model="newMsg" type="text" placeholder="new message" maxlength="32"/>
        <input v-model="newColor" type="color"/>
    </span>

    <RouterLink to="/">
       <span>
            <input type="button" value="cancel"/>
            <input type="button" value="save" @click="async () => await editCube(useRoute().params.id, newMsg, newColor)"/>
       </span>
    </RouterLink>
</template>
<script>
export default {
    data: () => {return {
        newMsg: '',
        newColor: '#ffffff'
    }},
}
</script>
<style scoped>

span {
    display: flex;
    gap: 1rem;
}

.form {
    margin-bottom: 1rem;
}

</style>