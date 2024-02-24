<template>
    <div class="home">
        <div class="container"><GameIntroduction :intro="'Guess today\'s Genshin Impact character!'"/></div>
        <InputCharacter :characters="characters"/>
        <Countdown @end="randCharacter" />
    </div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue';
import InputCharacter from '@/components/InputCharacter.vue';
import Countdown from '@/components/Countdown.vue';

export default {
    components: { GameIntroduction, InputCharacter, Countdown},
    data() {
        return {
            characters: [],
            currentCharacter: ""
        }
    },
    mounted() {
        fetch('http://localhost:3000/characters')
                .then(res => res.json())
                .then(data => {
                    this.characters = data;
                });

        // Check if the character is stored in localStorage
        const storedCharacter = localStorage.getItem('currentCharacter');
        if (storedCharacter) {
            this.currentCharacter = JSON.parse(storedCharacter);
        } else {
            // Fetch characters if not already stored
            this.randCharacter(); // Call randCharacter after characters are loaded
        }
    },
    methods: {
        randCharacter() {
            this.currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
            console.log(this.currentCharacter);

            // Store the current character in localStorage
            localStorage.setItem('currentCharacter', JSON.stringify(this.currentCharacter));
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