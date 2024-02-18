<template>
    <v-select 
        class="new-styles"
        placeholder="Type any character's name..." 
        :options="characters" 
        label="name"
    >
        <template #option="option">
          <span><img :src="option.image" />{{ option.name }}</span>
        </template>
        
    </v-select>
    <div class="submitButton"><img src="../assets/submit.png" alt="submit button"></div>
</template>

<script>
export default {
    data() {
        return {
            characters: [
                {
                    name: "Kaeya",
                    image: require("../assets/characters/Kaeya.png"),
                },
                { 
                    name: "Diluc",
                    image: require("../assets/characters/Diluc.png"),
                },
                { 
                    name: "Alhaitham",
                    image: require("../assets/characters/Alhaitham.png"),
                },
                { 
                    name: "Kaveh", 
                    image: require("../assets/characters/Kaveh.png"),
                },
                { 
                    name: "Kaedehara Kazuha",
                    image: require("../assets/characters/Kazuha.png"),
                },
                { 
                    name: "Bennett", 
                    image: require("../assets/characters/Bennett.png"),
                }
            ]
        }
    },
}
</script>

<style>

.new-styles {
    margin: 10px;
    width: 45%;
    height: auto;
    background-color: #0D0F26;
    border: solid 5px #F9B61A;
    border-radius: 20px;
    text-decoration: none;
    padding: 0.7em 0.7em;
}

.new-styles .vs__dropdown-menu {
    border: none;
    color: #F5E8AF;
    font-variant: Georgia;
    font-style: italic;
    background-color: #0D0F26;
    margin-top: 0.6em;

}

.new-styles .vs__dropdown-toggle,
.new-styles .vs__search::placeholder {
    border: none;
    color: #B29E99;
    font-variant: Georgia;
    font-style: italic;
}

.new-styles .vs__selected,
.new-styles .vs__clear {
    visibility: hidden;
}

span {
    display: flex;
    align-items: center;
}

span img {
    height: 50px;
    padding-right: 1em;

}

.submitButton {

}

</style>