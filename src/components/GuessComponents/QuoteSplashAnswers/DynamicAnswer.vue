<template>
    <div class="answer-container">
        <div class="img-square">
            <img :src="require(`@/assets/characters/${selectedCharacterImg}`)" />
        </div>
        <div class="name-rectangle" :style="getSquareStyle()">
            {{ selectedCharacterName }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedCharacterImg', 'selectedCharacterName'],
    emits: ['endGame'],
    data() {
        return {
            correct: false,
            currentCharacterName: ""
        }
    },
    mounted() {
        this.getCurrentCharacterName()
        this.compareCharacters()
    },
    methods: {
        getCurrentCharacterName() {
            const currentName = localStorage.getItem("currentQuoteName");
            this.currentCharacterName = currentName
            return this.currentCharacterName
        },
        getSquareStyle() {
            const isCorrect = this.checkCorrect(this.currentCharacterName, this.selectedCharacterName)
            return {
                backgroundColor: isCorrect ? 'rgba(64, 192, 87, 0.5)' : 'rgba(191, 69, 15, 0.5)',
                // Add any other styles to apply individually
            }
        },
        compareCharacters() {
            console.log(this.currentCharacterName, this.selectedCharacterName)
            if(this.currentCharacterName == this.selectedCharacterName) {
                this.$emit('endGame')
                
            }
        },
        checkCorrect(currentCharacterName, selectedCharacterName) {
            return currentCharacterName == selectedCharacterName;
        }
    }
}
</script>

<style scoped>
.answer-container {
    display: flex; 
    flex-direction: row;
    width: 100%;
    padding: 5px;
}
.img-square {
    border: 3px solid #59403A;
    min-width: 83px;
    max-width: 130px;
    aspect-ratio: 1;
    margin-right: 5px;
}
.img-square img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.433);
}
.name-rectangle {
    border: 3px solid #59403A;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: wheat;
    font-size: 1.4em;
}
</style>