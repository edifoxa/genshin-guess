<template>
    <div class="answers-container" :key="answer.id"
      v-for="answer in answers"
    >
      <DynamicAnswer
        @endGame="endGame"
        :selectedCharacterImg="answer.parameters.selectedImg"
        :selectedCharacter="answer.parameters.selectedAnswer"
        :currentCharacterImg="this.currentCharacterImg"
      />
    </div>
</template>

<script>
import DynamicAnswer from './DynamicAnswer.vue';

export default {
    components: { DynamicAnswer },
    props: [
        'selectedCharacterImg',
        'selectedCharacter',
        'currentCharacterImg'
    ],
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
        selectedCharacter: function() {
            this.addNewAnswer()
        }
    },
    methods: {
      addNewAnswer() {
        const newAnswer = {
          id: this.id++,
          parameters: {
            selectedImg: this.selectedCharacterImg,
            selectedAnswer: this.selectedCharacter
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

<style>
.answers-container {
  display: flex;
  flex-direction: row;
  width: 80%;
}
</style>