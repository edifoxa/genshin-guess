<template>
    <div class="home">
        <div class="container" v-if="isPlaying">
            <SplashIntroduction :currentSplash="currentSplash"
                :hints="hints"
            />
        </div>
        <InputCharacter v-if="isPlaying" @play="playQuote"
            :characters="characters"
        />
        <Guess v-if="start" @endGame="endGame"
            @updateSplash="updateSplash"
            :selectedCharacterImg="selectedCharacterImg"
            :selectedCharacterName="selectedCharacterName"
        />
        <Results v-if="!(isPlaying)"
            :currentCharacterImg="currentCharacterImg"
            :currentCharacterName="currentCharacterName"
            :tries="tries"
            :nextClassic="nextClassic"
            :currentSplash="currentSplash"
        />
    </div>
</template>

<script>
import SplashIntroduction from '@/components/MainComponents/Introductions/SplashIntroduction.vue'
import InputCharacter from '@/components/GuessComponents/InputCharacter.vue'
import Guess from '@/components/GuessComponents/QuoteSplashAnswers/Guess.vue'
import Results from '@/components/ResultsComponents/Results.vue'

export default {
    components: { SplashIntroduction, InputCharacter, Guess, Results },
    data() {
        return {
            characters: [],
            currentSplash: "",
            currentCharacterImg: "",
            currentCharacterName: "",
            selectedCharacterImg: "",
            selectedCharacterName: "",
            isPlaying: true,
            start: false,
            nextClassic: true,
            tries: 0,
            hints: 0
        }
    },
    mounted() {
    // localStorage.clear();
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data;
        this.getDailySplash()
      })
    },
    methods: {
        randSplash() {
            let currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
            this.currentSplash = currentCharacter.splash
            this.currentCharacterName = currentCharacter.name
            this.currentCharacterImg = currentCharacter.img

            // Store the current voiceline in localStorage
            localStorage.setItem(
                "currentSplash",
                this.currentSplash
            )
            localStorage.setItem(
                "currentSplashName",
                this.currentCharacterName
            )
            localStorage.setItem(
                "currentSplashImg",
                this.currentCharacterImg
            )
        },
        getDailySplash() {
            // Check if the voiceline is stored in localStorage
            if (localStorage.getItem("currentSplash") !== null) {
                // console.log("currentSplash is not null");
                const storedSplash = localStorage.getItem("currentSplash")
                const storedSplashName = localStorage.getItem("currentSplashName")
                const storedSplashImg = localStorage.getItem("currentSplashImg")
                this.currentSplash = storedSplash
                this.currentCharacterName = storedSplashName
                this.currentCharacterImg = storedSplashImg
            } else {
                console.log("currentSplash is null")
                this.randSplash()
            }
        },
        updateSplash(tries) {
            this.hints = tries
        },
        endGame(tries) {
            this.isPlaying = false
            this.tries = tries
        },
        playQuote(selectedCharacter) {
            this.start = true
            this.selectedCharacterImg = selectedCharacter.img
            this.selectedCharacterName = selectedCharacter.name
            this.characters.splice(this.characters.indexOf(selectedCharacter), 1)
        }
    }
}
</script>

<style scoped>
.container {
    width: 75%;
    min-width: fit-content;
    max-width: 500px;
}
</style>