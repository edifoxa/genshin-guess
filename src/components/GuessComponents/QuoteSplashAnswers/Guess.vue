<template>
    <div class="board-container">
        <Answers 
            @endGame="endGame"
            :selectedCharacterImg="selectedCharacterImg"
            :selectedCharacterName="selectedCharacterName"
        />
    </div>
</template>

<script>
import Answers from './Answers.vue';
export default {
    components: { Answers },
    props: ['selectedCharacterImg', 'selectedCharacterName'],
    emits: ['endGame'],
    methods: {
        endGame(tries) {
            this.$emit('endGame', tries)
        }
    }
}
</script>

<style scoped>
.board-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    width: 70%;
    overflow-x: auto;
}
</style>