<template>
    <div class="board-container">
        <Answers 
            @endGame="endGame"
            @updateTries="updateTries"
            :selectedCharacterImg="selectedCharacterImg"
            :selectedCharacterName="selectedCharacterName"
            :quoteMode="quoteMode"
        />
    </div>
</template>

<script>
import Answers from './Answers.vue'
export default {
    components: { Answers },
    props: ['selectedCharacterImg', 'selectedCharacterName', 'quoteMode'],
    emits: ['endGame', 'updateTries'],
    methods: {
        endGame(tries) {
            this.$emit('endGame', tries)
        },
        updateTries(tries) {
            this.$emit('updateTries', tries)
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