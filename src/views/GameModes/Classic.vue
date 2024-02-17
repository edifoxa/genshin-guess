<template>
    <div class="home">
        <div class="container"><GameIntroduction :intro="'Guess today\'s Genshin Impact character!'"/></div>
    </div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue';

export default {
    components: { GameIntroduction }
}
</script>

<style scoped>
.container {
    padding: 1.5em 5em;
    max-width: max-content;
    width: fit-content;
}
</style>