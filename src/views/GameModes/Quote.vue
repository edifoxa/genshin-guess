<template>
    <div class="home">
        <div class="container" v-if="isPlaying">
            <QuoteIntroduction
                :currentQuote="currentQuote"
                :currentAudio="currentAudio"
                :hints="hints"
            />  
        </div>
        <InputCharacter v-if="isPlaying" @play="playQuote"
            :characters="characters"
        />
        <Guess v-if="start" @endGame="endGame"
            @updateTries="updateTries"
            :selectedCharacterImg="selectedCharacterImg"
            :selectedCharacterName="selectedCharacterName"
            :quoteMode="quoteMode"
        />
        <Results v-if="!(isPlaying)"
            :currentCharacterImg="this.currentCharacterImg"
            :currentCharacterName="this.currentCharacterName"
            :tries="this.tries"
            :nextSplash="this.nextSplash"
            :currentAudio="currentAudio"
        />
        <Countdown class="countdown"/>
    </div>
</template>

<script>
import QuoteIntroduction from '@/components/MainComponents/Introductions/QuoteIntroduction.vue'
import InputCharacter from '@/components/GuessComponents/InputCharacter.vue'
import Guess from '@/components/GuessComponents/QuoteSplashAnswers/Guess.vue'
import Results from '@/components/ResultsComponents/Results.vue'
import Countdown from '@/components/ResultsComponents/Countdown.vue'

export default {
    components: { QuoteIntroduction, InputCharacter, Guess, Results, Countdown },
    data() {
        return {
            characters: [],
            currentQuote: "",
            currentAudio: "",
            currentCharacterImg: "",
            currentCharacterName: "",
            selectedCharacterImg: "",
            selectedCharacterName: "",
            isPlaying: true,
            start: false,
            quoteMode: true,
            nextSplash: true,
            tries: 0,
            hints: 0
        }
    },
    mounted() {
    // localStorage.clear()
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data
        this.getDailyQuote()
      })
    },
    methods: {
        randQuote() {
            let currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)]
            this.currentQuote = currentCharacter.quote
            this.currentAudio = currentCharacter.audio
            this.currentCharacterName = currentCharacter.name
            this.currentCharacterImg = currentCharacter.img

            // Store the current voiceline in localStorage
            localStorage.setItem(
                "currentQuote",
                this.currentQuote
            )
            localStorage.setItem(
                "currentAudio",
                this.currentAudio
            )
            localStorage.setItem(
                "currentQuoteName",
                this.currentCharacterName
            )
            localStorage.setItem(
                "currentQuoteImg",
                this.currentCharacterImg
            )
        },
        getDailyQuote() {
            // Check if the voiceline is stored in localStorage
            if ((localStorage.getItem("currentQuote") !== null) && (localStorage.getItem("currentAudio") !== null)) {
                const storedAudio = localStorage.getItem("currentAudio")
                const storedQuote = localStorage.getItem("currentQuote")
                const storedQuoteName = localStorage.getItem("currentQuoteName")
                const storedQuoteImg = localStorage.getItem("currentQuoteImg")
                this.currentAudio = storedAudio
                this.currentQuote = storedQuote
                this.currentCharacterName = storedQuoteName
                this.currentCharacterImg = storedQuoteImg
            } else {
                this.randQuote()
            }
        },
        playQuote(selectedCharacter) {
            this.start = true
            this.selectedCharacterImg = selectedCharacter.img
            this.selectedCharacterName = selectedCharacter.name
            this.characters.splice(this.characters.indexOf(selectedCharacter), 1)
        },
        updateTries(tries) {
            this.hints = tries
        },
        endGame(tries) {
            this.isPlaying = false
            this.tries = tries
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    min-width: min-content;
    width: 50%;
    max-width: 800px;
}
.countdown {
  visibility: hidden;
}
</style>