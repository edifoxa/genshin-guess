<template>
  <div class="home">
    <h2 class="text">Guess Genshin Impact Characters!</h2>
    <div class="container" @click="goClassic"><ModeButton :title="'Classic Mode'" :description="'Get hints on every try'"/></div>
    <div class="container" @click="goQuote"><ModeButton :title="'Quote'" :description="'Guess with in-game quotes'"/></div>
    <div class="container" @click="goSplash"><ModeButton :title="'Splash'" :description="'Guess from an image section'"/></div>
  </div>
</template>

<script>

// @ is an alias to /src
import ModeButton from '@/components/MainComponents/ModeButton.vue'

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

<style scoped>
.container {
  cursor: pointer;
}
</style>