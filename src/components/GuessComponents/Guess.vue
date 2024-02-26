<template>
    <div class="board-container">
        <Answers 
            :selectedCharacter="selectedCharacter" 
            :currentCharacter="currentCharacter"
            :selectedCharacterImg="selectedCharacterImg" 
            :currentCharacterImg="currentCharacterImg"
        />
        <Labels v-if="firstGuess" :labels="labels" />
    </div>
</template>

<script>
import Labels from './Labels.vue';
import Answers from './Answers/Answers.vue';

export default {
    components: { Labels, Answers },
    props: [
        'labels',
        'currentCharacter',
        'selectedCharacter',
        'selectedCharacterImg',
        'currentCharacterImg',
        'selectedCharacterVersion',
        'currectCharacterVersion'
    ],
    data() {
        return {
            firstGuess: true,
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
    width: 80%;
}
</style>