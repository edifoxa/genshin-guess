<template>
  <div class="home">
    <ClassicIntroduction :intro="'Guess today\'s Genshin Impact character!'" />
    <InputCharacter v-if="isPlaying" :characters="characters" @play="playClassic" />
    <Guess v-if="start" 
      @endGame="endGame"
      :labels="labels" 
      :selectedCharacter="this.selectedCharacter"
      :selectedCharacterImg="this.selectedCharacterImg"
      :currentCharacterImg="this.currentCharacterImg"
    />
    <ColorIndicators v-if="isPlaying"/>
    <Results v-if="!(isPlaying)"
      :currentCharacterImg="this.currentCharacterImg"
      :currentCharacterName="this.currentCharacterName"
      :tries="this.tries"
      :nextQuote="this.nextQuote"
    />
    <Countdown @end="randCharacter" class="countdown"/>
  </div>
</template>

<script>
import ClassicIntroduction from "@/components/MainComponents/Introductions/ClassicIntroduction.vue"
import InputCharacter from "@/components/GuessComponents/InputCharacter.vue"
import Countdown from "@/components/ResultsComponents/Countdown.vue"
import Guess from "@/components/GuessComponents/Guess.vue"
import ColorIndicators from "@/components/MainComponents/ColorIndicators.vue"
import Results from "@/components/ResultsComponents/Results.vue"

export default {
  components: { ClassicIntroduction, InputCharacter, Countdown, Guess, ColorIndicators, Results },
  data() {
    return {
      labels: [
        "Character",
        "Gender",
        "Vision",
        "Weapon",
        "Region(s)",
        "Version",
      ],
      characters: [],
      currentCharacter: "",
      selectedCharacter: "",
      selectedCharacterImg: "",
      currentCharacterImg: "",
      currentCharacterName: "",
      start: false,
      isPlaying: true,
      nextQuote: true,
      tries: 0
    };
  },
  mounted() {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => {
        this.characters = data;
        this.getDailyCharacter();
      });
  },
  methods: {
    randCharacter() {
      this.currentCharacter =
        this.characters[Math.floor(Math.random() * this.characters.length)];

      // Store the current character in localStorage
      localStorage.setItem(
        "currentCharacter",
        JSON.stringify(this.currentCharacter)
      );
    },
    getDailyCharacter() {
      // Check if the character is stored in localStorage
      if (localStorage.getItem("currentCharacter") !== null) {
        console.log("storedCharacter is not null");
        const storedCharacter = localStorage.getItem("currentCharacter");
        console.log(storedCharacter);
        this.currentCharacter = JSON.parse(storedCharacter);
      } else {
        console.log("storedCharacter is null");
        this.randCharacter();
      }
    },
    playClassic(selectedCharacter) {
      this.start = true;
      this.currentCharacterName = this.currentCharacter.name
      this.currentCharacterImg = this.currentCharacter.img
      this.selectedCharacterImg = selectedCharacter.img
      this.selectedCharacter = [
        selectedCharacter.gender,
        selectedCharacter.vision,
        selectedCharacter.weapon,
        selectedCharacter.region,
        selectedCharacter.version
      ]
      this.characters.splice(this.characters.indexOf(selectedCharacter), 1);
    },
    endGame(tries) {
      console.log(tries)
      this.isPlaying = false
      this.tries = tries
    }
  },
};
</script>

<style scoped>
.countdown {
  display: none;
}
</style>
