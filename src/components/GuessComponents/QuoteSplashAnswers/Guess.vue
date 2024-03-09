<template>
    <div class="board-container">
        <Answers 
            @endGame="endGame"
            @updateSplash="updateSplash"
            :selectedCharacterImg="selectedCharacterImg"
            :selectedCharacterName="selectedCharacterName"
            :quoteMode="quoteMode"
        />
    </div>
</template>

<script>
import Answers from './Answers.vue';
export default {
    components: { Answers },
    props: ['selectedCharacterImg', 'selectedCharacterName', 'quoteMode'],
    emits: ['endGame', 'updateSplash'],
    methods: {
        endGame(tries) {
            this.$emit('endGame', tries)
        },
        updateSplash(tries) {
            this.$emit('updateSplash', tries)
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