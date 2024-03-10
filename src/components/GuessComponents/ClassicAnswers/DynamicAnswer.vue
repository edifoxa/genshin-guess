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
    <div class="squares-container">
      <div v-if="older" class="square" :style="'background-color: rgba(191, 69, 15, 0.5)'">⬆</div>
      <div v-if="newer" class="square" :style="'background-color: rgba(191, 69, 15, 0.5)'">⬇</div>
      <div v-if="ok" class="square" :style="'background-color: rgba(64, 192, 87, 0.5)'">OK</div>
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
      older: false,
      newer: false,
      ok: false,
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
    shouldRenderSquare(index) {
      return index < this.renderedSquares
    },
    getSquareStyle(index) {
      this.checkNewer(this.currentCharacter, this.selectedCharacter, index)
      this.checkOlder(this.currentCharacter, this.selectedCharacter, index)
      this.checkOkVersion(this.currentCharacter, this.selectedCharacter, index)
      const isCorrect = this.checkCorrect(this.currentCharacter, this.selectedCharacter, index)
      const isPartial = this.checkPartial(this.currentCharacter, this.selectedCharacter, index)
      return {
        'background-color': isCorrect ? 'rgba(64, 192, 87, 0.5)' : isPartial ? 'rgba(250, 176, 5, 0.5)' : 'rgba(191, 69, 15, 0.5)',
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
    checkNewer(currentCharacter, selectedCharacter, index) {
      if (
        typeof currentCharacter[index] === 'number' &&
        typeof selectedCharacter[index] === 'number' &&
        currentCharacter[index] < selectedCharacter[index]
      ) {
        this.newer = true
      }
    },
    checkOlder(currentCharacter, selectedCharacter, index) {
      if (
        typeof currentCharacter[index] === 'number' &&
        typeof selectedCharacter[index] === 'number' &&
        currentCharacter[index] > selectedCharacter[index]
      ) {
        this.older = true
      }
    },
    checkOkVersion (currentCharacter, selectedCharacter, index) {
      if (
        typeof currentCharacter[index] === 'number' &&
        typeof selectedCharacter[index] === 'number' &&
        currentCharacter[index] == selectedCharacter[index]
      ) {
        this.ok = true
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
    },
    compareCharacters() {
      if(this.currentCharacterImg == this.selectedCharacterImg) {
        this.$emit('endGame')
      }
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