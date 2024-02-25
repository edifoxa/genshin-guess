<template>
    <div class="labels-container">
        <div class="labels" v-for="label in labels">
            <p>{{ label }}</p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    props: ['labels']
}
</script>

<style scoped>
.labels-container {
    display: flex;
    flex-direction: row;
    width: 80%;
}
.labels {
    width: 100%;
    padding: 10px;
}
p {
    color: wheat;
    padding: 0;
    font-size: 1.2rem;
}

hr {
    width: 100%;
}
</style>