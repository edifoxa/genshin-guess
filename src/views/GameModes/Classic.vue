<template>
    <div class="home">
        <div class="container"><GameIntroduction :intro="'Guess today\'s Genshin Impact character!'"/></div>
        <InputCharacter :characters="characters" @guess="guess"/>
        <Countdown @end="randCharacter"/>
        <Guess v-if="play"/>
    </div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue'
import InputCharacter from '@/components/InputCharacter.vue'
import Countdown from '@/components/Countdown.vue'
import Guess from '@/components/Guess.vue'

export default {
    components: { GameIntroduction, InputCharacter, Countdown, Guess},
    props: ['selectedCharacter'],
    data() {
        return {
            characters: [],
            currentCharacter: "",
            play: false
        }
    },
    mounted() {
        fetch('http://localhost:3000/characters')
                .then(res => res.json())
                .then(data => {
                    this.characters = data
                    this.getDailyCharacter()
                });
    },
    methods: {
        randCharacter() {
            this.currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)]
            console.log(this.currentCharacter)
            // Store the current character in localStorage
            localStorage.setItem('currentCharacter', JSON.stringify(this.currentCharacter))
        },
        getDailyCharacter() {
            // Check if the character is stored in localStorage
            if (localStorage.getItem('currentCharacter') !== null) {
                console.log("storedCharacter is not null")
                const storedCharacter = localStorage.getItem('currentCharacter')
                console.log(storedCharacter)
                this.currentCharacter = JSON.parse(storedCharacter)
            } else {
                console.log("storedCharacter is null")
                this.randCharacter()
            }
        },
        guess(selectedCharacter) {
            console.log(selectedCharacter)
            this.play = true
        }
    }
}
</script>

<style scoped>
.container {
    padding: 1.5em 5em;
    max-width: max-content;
    width: fit-content;
}
</style>