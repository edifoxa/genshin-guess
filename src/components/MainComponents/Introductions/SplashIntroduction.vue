<template>
    <div class="intro" v-if="dataLoaded">
        <h2 class="intro-text">Which character is it?</h2>
        <SplashAdjuster :currentSplash="currentSplash" :hints="hints" />
    </div>
    <div v-else class="intro">
        <h2 class="loading">Loading...</h2>
    </div>
</template>

<script>
import InputCharacter from '@/components/GuessComponents/InputCharacter.vue'
import SplashAdjuster from '@/components/MainComponents/SplashAdjuster.vue'
export default {
    components: { InputCharacter, SplashAdjuster },
    props: ['currentSplash', 'hints'],
    data() {
        return {
            dataLoaded: false
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
                }, 300)
            })
        }
    }
}
</script>

<style scoped>
.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
}
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