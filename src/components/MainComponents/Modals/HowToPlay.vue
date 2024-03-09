<template>
    <div class="background" @click.self="closeModal">
        <div class="modal container">
            <h1 class="modal-title">
                HOW TO PLAY?
            </h1>
            <hr class="modal-hr">
            <p class="modal-text">
                You can guess characters from Genshin Impact every 24h.
            </p>
            <div class="countdown-container">
                <Countdown/>
            </div>
            <p class="modal-text">
                Uncover character's properties by entering a name.
            </p>
            <p class="modal-text">
                Color of the squares will change depending on how close your guess was. 
            </p>
            <p class="modal-text">
                <span style="color: #BF450F;">Red</span> indicates the wrong answer - the properties aren't a match.
                <br>
                <span style="color: #FAB005;">Yellow</span> indicates the partially good answer.
                <br>
                <span style="color: #40C057;">Green</span> indicates the correct answer - keep up!
            </p>
            <p class="modal-text">
                You have unlimited number of tries, but remember: the less, the better! 
            </p>
            <div class="centered-text">
                <p>Good luck, have fun!</p>
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from '@/components/ResultsComponents/Countdown.vue'

export default {
    components: { Countdown },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.background {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal {
    padding: 20px;
    border-radius: 10px;
    width: 80%; 
    max-width: 800px; 
    z-index: 2;
}
.modal-title {
    color: #f3db7d;
}
.modal-hr {
    background-color: #B29E99;
    border: none;
    height: 1px;
}
.modal-text {
    color: #f3e9c1;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.countdown-container {
    display: flex;
    justify-content: center;
}
span {
    display: inline-block;
    padding-bottom: 5px;
}
.centered-text {
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    color: #f3db7d;
    margin: 5px 0;
}
</style>