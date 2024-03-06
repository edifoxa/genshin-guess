<template>
    <form class="submit" @submit.prevent="handleSubmit">
        <v-select 
            class="new-styles"
            placeholder="Type any character's name..." 
            :options="characters" 
            label="name"
            v-model="selectedCharacter"
        >
            <template #option="option">
                <span>
                    <img :src="require('@/assets/characters/' + option.img)" />
                    <div class="option-name">{{ option.name }}</div>
                </span>
            </template>
        </v-select>
        <button id="submitBtn" type="submit"><img src="@/assets/buttons/submit.png" alt="submit button"></button>
    </form>
</template>

<script>
export default {
    props: ['characters'],
    data() {
        return {
            selectedCharacter: ""
        }
    },
    watch: {
        selectedCharacter: function() {
            this.handleSubmit()
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('play', this.selectedCharacter)
        }
    }
}
</script>

<style>
.submit {
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
    min-width: 383px;
}

.new-styles {
    margin: 10px;
    width: 80%;
    height: auto;
    background-color: #0D0F26;
    border: solid 5px #F9B61A;
    border-radius: 20px;
    text-decoration: none;
    padding: 0.7em 0.7em;
    font-variant: Georgia;
}

.new-styles .vs__search,
.new-styles .vs__dropdown-menu {
    border: none;
    color: #F5E8AF;
    background-color: #0D0F26;
    margin-top: 0.6em;
    z-index: 0;
}

.new-styles .vs__dropdown-toggle,
.new-styles .vs__search::placeholder {
    border: none;
    color: #B29E99;
    font-style: italic;
    z-index: 0;
}

.new-styles .vs__selected,
.new-styles .vs__clear {
    visibility: hidden;
    z-index: 0;
}

span {
    display: flex;
    align-items: center;
}

span img {
    width: max-content;
    margin-bottom: 2px;
}

.option-name {
    padding-left: 2em;
    font-size: 1.2em;
}

.submit img {
    height: 5em;
    width: 5em;
}

::-webkit-scrollbar {
    background-color: #070716;
}

::-webkit-scrollbar-thumb {
    background-color: #05071D;
    background-clip: padding-box;
    border: 0.1em solid #302032;
}

#submitBtn {
    border: none;
    height: fit-content;
    width: fit-content;
    background: transparent;
    cursor: pointer;
}

</style>