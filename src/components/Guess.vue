<template>
    <div class="board-container" >
        <Labels v-if="firstGuess" :labels="labels"/>
        <Answer 
            :labels="labels" 
            :selectedCharacter="selectedCharacter" 
            :currentCharacter="currentCharacter" 
            :selectedCharacterImg="selectedCharacterImg" 
            :currentCharacterImg="currentCharacterImg"
            :currectCharacterVersion="currectCharacterVersion"
            :selectedCharacterVersion="selectedCharacterVersion"
        />
    </div>
</template>

<script>
import Labels from './GuessComponents/Labels.vue';
import Answer from './GuessComponents/Answer.vue';

export default {
    components: { Labels, Answer },
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
            firstGuess: true
        }
    }
}
</script>

<style scoped>
.board-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
}
</style>