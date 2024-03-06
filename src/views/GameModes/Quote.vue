<template>
    <div class="home">
        <div class="container">
            <h3>Which character says:</h3>
        </div>
        <InputCharacter v-if="isPlaying" :characters="characters"/>
    </div>
</template>

<script>
import InputCharacter from '@/components/GuessComponents/InputCharacter.vue';

export default {
    components: { InputCharacter },
    data() {
        return {
            characters: [],
            quotes: [],
            currentQuote: "",
            currentAudio: "",
            selectedQuote: "",
            selectedAudio: "",
            start: false,
            isPlaying: true,
            nextSplash: true,
            tries: 0
        }
    },
    mounted() {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data;
        // this.getDailyQuote()
        this.randQuote()

      })
    },
    methods: {
        randQuote() {
            let currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
            console.log(currentCharacter)
            console.log(currentCharacter.quote)
            // Store the current character in localStorage
            // localStorage.setItem(
            //     "currentQuote",
            //     JSON.stringify(this.currentCharacter)
            // )
        },
        // getDailyQuote() {
        //     // Check if the character is stored in localStorage
        //     if (localStorage.getItem("currentQuote") !== null) {
        //         console.log("storedQuote is not null");
        //         const storedQuote = localStorage.getItem("currentQuote");
        //         console.log(storedQuote);
        //         this.currentQuote = JSON.parse(storedQuote);
        //     } else {
        //         console.log("storedQuote is null");
        //         this.randQuote()
        //     }
        // }
    }
}
</script>

<style>
</style>