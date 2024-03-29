<template>
    <div class="container results">
        <div ref="scrollTarget"></div>
        <h2 class="text yellow">Well done Traveler!</h2>
        <div class="correct-answer">
            <div class="square"><img :src="require(`@/assets/characters/${currentCharacterImg}`)" /></div>
            <div>
                <p class="results-text">
                    You guessed:
                </p>
                <h2 class="text">
                    <div class="name">{{ currentCharacterName }}</div>
                </h2>
            </div>
        </div>
        <div class="tries">
            <h2 class="results-text">
                Number of tries: {{ tries }}
                <hr>
            </h2>
        </div>
        <div v-if="currentAudio">
            <AudioPlayer :currentAudio="currentAudio" :hints="hints"
            />
        </div>
        <div class="container splash" v-if="currentSplash">
            <img class="fullSplash" :src="require(`@/assets/splasharts/${currentSplash}`)">
        </div>
        <div class="next-mode">
            <h2 class="results-text">
                Next mode:
            </h2>
            <div v-if="nextClassic" class="container mode" @click="goClassic">
                <ModeButton :title="'Classic Mode'" :description="'Get hints on every try'"/>
            </div>
            <div v-if="nextQuote" class="container mode" @click="goQuote">
                <ModeButton :title="'Quote'" :description="'Guess with in-game quotes'"/>
            </div>
            <div v-if="nextSplash" class="container mode" @click="goSplash">
                <ModeButton :title="'Splash'" :description="'Guess from an image section'"/>
            </div>
        </div>
    </div>
</template>

<script>
import ModeButton from '../MainComponents/ModeButton.vue'
import AudioPlayer from '@/components/MainComponents/AudioPlayer.vue'
export default {
    data() {
        return {
            hints: 5
        }
    },
    props: [
        'currentCharacterImg', 
        'currentCharacterName', 
        'tries', 
        'nextClassic', 
        'nextQuote', 
        'nextSplash', 
        'currentAudio', 
        'currentSplash'
    ],
    components: { ModeButton, AudioPlayer },
    mounted() {
        this.scrollToBottom()
    },
    methods: {
        goClassic() {
            this.$router.push({ name: 'Classic' })
        },
        goQuote() {
            this.$router.push({ name: 'Quote' })
        },
        goSplash() {
            this.$router.push({ name: 'Splash' })
        },
        scrollToBottom() {
            const scrollTarget = this.$refs.scrollTarget
            scrollTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
}
</script>

<style scoped>
.results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 300px !important;
    max-width: 500px;
}
.yellow {
    color: #FAB005;
}
.correct-answer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 75%;
}
.square {
    border: 3px solid #59403A;
    min-width: 90px;
    width: 6em;
    aspect-ratio: 1;
    margin: 10px 40px;
    margin-left: 0;
}
.results-text {
    font-size: 1.1em;
    color: #F5E8AF;
    margin: 5px 0;
    padding: 2px 20px;
}
.name {
    color: #f3db7d;
}
.tries,
.next-mode {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.mode {
    min-width: 250px ;
    margin: 10px 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
}
.mode:hover {
    transform: scale(1.02);
}
.container.splash {
    width: 90%;
    border-width: 1px;
}
.fullSplash {
    max-width: 90%;
}
</style>