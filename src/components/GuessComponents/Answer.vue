<template>
    <div class="answers-container">
        <div class="squares-container">
            <div class="square"><img :src="require('../../assets/characters/' + selectedCharacterImg)"/></div>
        </div>
        <div class="squares-container" v-for="trait in selectedCharacter">
            <div class="square">{{ trait }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['labels', 'currentCharacter', 'selectedCharacter', 'selectedCharacterImg'],
    data() {
        return {
            index: 0
        }
    },
    methods: { }    
}
</script>

<style>

.answers-container {
    display: flex;
    flex-direction: row;
    width: 80%;
}

.squares-container {
    width: 100%;
    padding: 10px;
    height: min-content;
}

.square {
    border: 3px solid #59403A;
    font-size: 1.2em;
    color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    background-color: rgba(191, 69, 15, 0.5);
}

.square img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

</style>