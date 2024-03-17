<template>
    <div class="audio-player">
        <img v-if="!showHint" src="@/assets/buttons/play-inactive.png" class="audio-button-inactive">
        <button v-else @click="toggleAudio">
            <img v-if="!plays && showHint" src="@/assets/buttons/play-active.png" alt="Play" class="audio-button">
            <img v-else src="@/assets/buttons/pause-active.png" alt="Pause" class="audio-button">
        </button>
        <h2 v-if="!showHint" class="text desc disabled">Unlock audio hint in {{ remains }} tries</h2>
        <h2 v-else class="text desc">Listen to the quote</h2>
    </div>
</template>

<script>
export default {
    props: ['currentAudio', 'hints'],
    data() {
        return {
            plays: false,
            audioElement: null,
            showHint: false,
            remains: 3
        }
    },
    mounted() {
        if (this.hints >= 3) {
            this.showHint = true
        }
        this.setupAudioElement()
    },
    watch: {
        hints: function() {
            if (this.hints >= 3) {
                this.showHint = true
            }
            this.remains--
        }
    },
    methods: {
        toggleAudio() {
            if (this.audioElement) {
                if (this.plays) {
                    this.audioElement.pause()
                    this.audioElement.currentTime = 0
                } else {
                    this.audioElement.play()
                }
                this.plays = !this.plays
            }
        },
        setupAudioElement() {
            this.audioElement = new Audio(require(`@/assets/voicelines/${this.currentAudio}`))
            this.audioElement.addEventListener('ended', () => {
                this.plays = false
            })
        }
    }
}
</script>

<style scoped>
.audio-player {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
}
button {
    background: none;
    border: none;
    cursor: pointer;
    width: 60px;
    height: 60px;
    padding: 0;
    margin-left: 10px;
    display: inline-flex;
}
.audio-button-inactive,
.audio-button {
    max-width: 60px;
    padding: 0;
    transition: transform 0.3s ease;
}
.audio-button:hover {
    transform: scale(1.05);
}
.desc {
    padding-left: 20px;
    font-size: 20px;
    font-style: italic;
    font-weight: lighter;
    color: #F9B61A;
}
.desc.disabled {
    color: #949494;
}
</style>