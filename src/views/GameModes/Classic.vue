<template>
  <div class="home">
    <div class="container">
      <GameIntroduction :intro="'Guess today\'s Genshin Impact character!'" />
    </div>
    <InputCharacter v-if="isPlaying" :characters="characters" @play="playClassic" />
    <Guess v-if="start" 
      @endGame="endGame"
      :labels="labels" 
      :selectedCharacter="this.selectedCharacter"
      :selectedCharacterImg="this.selectedCharacterImg"
      :currentCharacterImg="this.currentCharacterImg"
    />
    <Countdown @end="randCharacter" class="countdown"/>
  </div>
</template>

<script>
import GameIntroduction from "@/components/MainComponents/GameIntroduction.vue";
import InputCharacter from "@/components/GuessComponents/InputCharacter.vue";
import Countdown from "@/components/ResultsComponents/Countdown.vue";
import Guess from "@/components/GuessComponents/Guess.vue";

export default {
  components: { GameIntroduction, InputCharacter, Countdown, Guess },
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
      start: false,
      isPlaying: true
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
    endGame() {
      this.isPlaying = false
    }
  },
};
</script>

<style scoped>
.container {
  padding: 1.5em 5em;
  max-width: max-content;
  width: fit-content;
}

.countdown {
  display: none;
}
</style>
