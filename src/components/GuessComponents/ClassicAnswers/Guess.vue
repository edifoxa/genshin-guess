<template>
    <div class="board-container">
        <Answers 
            @endGame="endGame"
            :selectedCharacter="this.selectedCharacter"
            :selectedCharacterImg="this.selectedCharacterImg" 
            :currentCharacterImg="this.currentCharacterImg"
        />
        <Labels :labels="labels"/>
    </div>
</template>

<script>
import Labels from './Labels.vue'
import Answers from './Answers.vue'
export default {
    components: { Labels, Answers },
    props: [
        'labels',
        'selectedCharacter',
        'selectedCharacterImg',
        'currentCharacterImg'
    ],
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