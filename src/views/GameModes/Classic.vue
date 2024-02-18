<template>
    <div class="home">
        <div class="container"><GameIntroduction :intro="'Guess today\'s Genshin Impact character!'"/></div>
        <InputCharacter/>
    </div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue';
import InputCharacter from '@/components/InputCharacter.vue';

export default {
    components: { GameIntroduction, InputCharacter }
}
</script>

<style scoped>
.container {
    padding: 1.5em 5em;
    max-width: max-content;
    width: fit-content;
}
</style>