<template>
    <div class="home">
        <div class="container"><GameIntroduction :intro="'Guess today\'s Genshin Impact character!'"/></div>
        <InputCharacter :characters="characters" @start="startClassic"/>
        <Countdown @end="randCharacter"/>
        <Guess v-if="play" :labels="labels" :selectedCharacter="selectedCharacter" :currentCharacter="currentCharacter" :selectedCharacterImg="selectedCharacterImg"/>
    </div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue'
import InputCharacter from '@/components/InputCharacter.vue'
import Countdown from '@/components/Countdown.vue'
import Guess from '@/components/Guess.vue'

export default {
    components: { GameIntroduction, InputCharacter, Countdown, Guess},
    data() {
        return {
            labels: ["Character", "Gender", "Vision", "Weapon", "Region(s)", "Version"],
            characters: [],
            currentCharacter: "",
            selectedCharacter: "",
            selectedCharacterImg: "",
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
        startClassic(selectedCharacter) {
            this.play = true
            this.selectedCharacter = [selectedCharacter.gender, selectedCharacter.vision, selectedCharacter.weapon, selectedCharacter.region, selectedCharacter.version]
            this.selectedCharacterImg = selectedCharacter.img
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