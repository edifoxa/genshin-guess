<template>
  <div class="home">
    <h2 class="text">Guess Genshin Impact Characters!</h2>
    <div class="button" @click="goClassic"><ModeButton :title="'Classic Mode'" :description="'Get hints on every try'" /></div>
    <div class="button" @click="goQuote"><ModeButton :title="'Quote'" :description="'Guess with in-game quotes'" /></div>
    <div class="button" @click="goSplash"><ModeButton :title="'Splash'" :description="'Guess from an image section'" /></div>
  </div>
</template>

<script>

// @ is an alias to /src
import ModeButton from '@/components/ModeButton.vue';

export default {
  name: 'Home',
  components: { ModeButton },
  methods: {
    goClassic() {
      this.$router.push({ name: 'Classic' })
    },
    goQuote() {
      this.$router.push({ name: 'Quote' })
    },
    goSplash() {
      this.$router.push({ name: 'Splash' })
    }
  },
}
</script>

<style>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .button {
    margin: 10px;
    width: 30%;
    height: auto;
    background-color: #0D0F26;
    border: solid 5px #59403A;
    border-radius: 20px;
    text-decoration: none;
  }

</style>