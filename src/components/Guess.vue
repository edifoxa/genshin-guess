<template>
    <div class="board-container" >
        <Labels/>
        <Square/>
    </div>
</template>

<script>
import Labels from './GuessComponents/Labels.vue';
import Square from './GuessComponents/Square.vue';

export default {
    components: { Labels, Square },
    methods: {
        guess(selectedCharacter) {
            console.log(selectedCharacter)
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
}
</style>