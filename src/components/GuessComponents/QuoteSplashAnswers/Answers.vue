<template>
    <div class="answers-container" v-for="answer in answers" :key="answer.id">
        <DynamicAnswer
            @endGame="endGame"
            :selectedCharacterImg="answer.parameters.selectedCharacterImg"
            :selectedCharacterName="answer.parameters.selectedCharacterName"
            :currentCharacterName="currentCharacterName"
        />
    </div>
</template>

<script>
import DynamicAnswer from './DynamicAnswer.vue';
export default {
    components: { DynamicAnswer },
    props: ['currentCharacterName', 'selectedCharacterImg', 'selectedCharacterName'],
    emits: ['endGame'],
    data() {
        return {
            answers: [],
            id: 0,
            tries: 0
        }
    },
    mounted() {
        this.addNewAnswer()
    },
    watch: {
        selectedCharacterName: function() {
            this.addNewAnswer()
        }
    },
    methods: {
        addNewAnswer() {
            const newAnswer = {
                id: this.id++,
                parameters: {
                    selectedCharacterImg: this.selectedCharacterImg,
                    selectedCharacterName: this.selectedCharacterName
                }
            }
            this.answers.push(newAnswer)
            this.tries++
        },
        endGame() {
            this.$emit('endGame', this.tries)
        }
    }
}
</script>