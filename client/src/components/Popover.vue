<script setup>

defineProps({
    text: String,
    actionText: String,
    action: Function,
    cancelAction: Function
})

</script>
<template>
    <div>
        <p>{{ text }}</p>
        <span>
            <input type="button" value="cancel" @click="cancelAction"/>
            <input id="delete" type="button" :value="actionText" @click="action"/>
        </span>
    </div>
</template>
<style scoped>

span {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

p {
    text-align: center;
}

#delete {
    background-color: var(--delete-color);
}

input {
    padding: 0.5rem;
    font-size: inherit;
    border-radius: 0.5rem;
}

</style>