<template>
    <div v-if="dataLoaded">
        <h2 class="intro-text">Which character says:</h2>
        <h2 class="quote">"{{ currentQuote }}"</h2>
        <AudioPlayer :currentAudio="currentAudio" :hints="hints" />
    </div>
    <div v-else class="intro">
        <h2 class="loading">Loading...</h2>
    </div>
</template>

<script>
import InputCharacter from '@/components/GuessComponents/InputCharacter.vue'
import AudioPlayer from '../AudioPlayer.vue'
export default {
    components: { InputCharacter, AudioPlayer },
    props: ['currentQuote', 'currentAudio', 'hints'],
    data() {
        return {
            dataLoaded: false,
        }
    },
    beforeMount() {
        this.loadData()
            .then(() => {
                this.dataLoaded = true
            })
            .catch((error) => {
                console.error('Error loading data:', error)
            })
    },
    methods: {
        loadData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            })
        }
    }
}
</script>

<style scoped>
.intro-text {
    color: #949494;
    font-size: 20px;
}
.loading{
    font-style: italic;
    font-weight: lighter;
    min-width: fit-content;
    padding-left: 25px;
    padding-right: 25px;
}
</style>