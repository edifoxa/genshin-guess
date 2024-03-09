<template>
  <div class="squares-container">
    <div class="square">
      <img :src="require(`@/assets/characters/${selectedCharacterImg}`)" />
    </div>
  </div>
    <div class="squares-container" v-for="(attribute, index) in selectedCharacter" :key="index">
      <template v-if="shouldRenderSquare(index)">
        <div class="square" :style="getSquareStyle(index)">
          {{ attribute }}
        </div>
      </template>
    </div>
</template>

<script>
export default {
  props: [
    'selectedCharacter',
    'selectedCharacterImg',
    'currentCharacterImg'
  ],
  emits: ['endGame'],
  data() {
    return {
      green: false,
      renderedSquares: 0,
      currentCharacter: "",
      end: false
    }
  },
  mounted() {
    this.getCurrentCharacter()
    this.renderSquaresWithDelay()
  },
  methods: {
    getCurrentCharacter() {
        const storedCharacter = localStorage.getItem("currentCharacter")
        this.currentCharacter = JSON.parse(storedCharacter)
        return this.currentCharacter = [
          this.currentCharacter.gender,
          this.currentCharacter.vision,
          this.currentCharacter.weapon,
          this.currentCharacter.region,
          this.currentCharacter.version
        ]
    },
    compareCharacters() {
      if(this.currentCharacterImg == this.selectedCharacterImg) {
        this.$emit('endGame')
      }
    },
    checkCorrect(currentCharacter, selectedCharacter, index) {
      return currentCharacter[index] == selectedCharacter[index]
    },
    checkPartial(currentCharacter, selectedCharacter, index) {
      return (
        (typeof currentCharacter[index] === 'string' &&
          typeof selectedCharacter[index] === 'string' &&
          currentCharacter[index].includes(selectedCharacter[index])) ||
        (typeof currentCharacter[index] === 'string' &&
          typeof selectedCharacter[index] === 'string' &&
          selectedCharacter[index].includes(currentCharacter[index]))
      )
    },
    shouldRenderSquare(index) {
      return index < this.renderedSquares
    },
    getSquareStyle(index) {
      const isCorrect = this.checkCorrect(this.currentCharacter, this.selectedCharacter, index)
      const isPartial = this.checkPartial(this.currentCharacter, this.selectedCharacter, index)
      return {
        'background-color': isCorrect ? 'rgba(64, 192, 87, 0.5)' : isPartial ? 'rgba(250, 176, 5, 0.5)' : 'rgba(191, 69, 15, 0.5)'
      }
    },
    renderSquaresWithDelay() {
      const delay = 200
      this.selectedCharacter.forEach((attribute, index) => {
        setTimeout(() => {
          this.renderedSquares = index + 1
        }, (index + 1) * delay)
      })
      this.compareCharacters()
    }
  }
}
</script>

<style>
.squares-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
}
.square {
  border: 3px solid #59403A;
  font-size: 1.2em;
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 83px;
  aspect-ratio: 1;
}
.square img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.433);
}
</style>