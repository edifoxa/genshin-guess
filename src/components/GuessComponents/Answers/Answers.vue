<template>
    <div class="answers-container" :key="answer.id"
      v-for="answer in answers"
    >
      <DynamicAnswer
        :currentCharacterImg="answer.parameters.currentImg"
        :selectedCharacterImg="answer.parameters.selectedImg"
        :currentCharacter="answer.parameters.currentAnswer"
        :selectedCharacter="answer.parameters.selectedAnswer"
      />
    </div>
</template>

<script>
import DynamicAnswer from './DynamicAnswer.vue';

export default {
    components: { DynamicAnswer },
    props: [
        'currentCharacterImg',
        'selectedCharacterImg',
        'currentCharacter',
        'selectedCharacter'
    ],
    data() {
      return {
        answers: [],
        id: 0
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
            currentImg: this.currentCharacterImg,
            selectedImg: this.selectedCharacterImg,
            currentAnswer: this.currentCharacter,
            selectedAnswer: this.selectedCharacter
          }
        }
        this.answers.push(newAnswer)
        console.log(this.answers)
      }
    }
}  
</script>

<style>
.answers-container {
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 10px;
}
</style>