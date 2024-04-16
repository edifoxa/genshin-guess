<template>
    <div class="background" @click.self="closeModal">
        <div class="modal container">
            <h1 class="modal-title">
                ABOUT
            </h1>
            <hr class="modal-hr">
            <p class="modal-text">
                Guess a character from Genshin Impact Version 4.5!
            </p>
            <p class="modal-text">
                Genshin Guess has been created thanks to the <a href="https://loldle.net/" class="a-modal">Loldle.net</a> 
                - it was a great inspiration for me.
                <br>
                If you like League of Legends, please check it out &#128522;
            </p>
            <p class="modal-text">
                If you found a bug or have any suggestion, feel free to contact me via mail: <a href="mailto:genshin-guess@gmail.com" class="a-modal">genshin-guess@gmail.com</a>
            </p>
            <p class="modal-text">
                Assets used in this game are owned by HoYoverse and their usage complies with HoYoverse's <a href="https://www.hoyolab.com/article/143107" class="a-modal">intellectual property guidelines</a>.
            </p>
            <p class="modal-text">
                Background image reference: <a href="https://www.pixiv.net/en/artworks/86644511" class="a-modal">URL</a>
            </p>
            <p class="modal-text">
                Logo font reference: <a href="https://ko-fi.com/s/003e0b6b50" class="a-modal">URL</a>
            </p>
            <p class="modal-text-cr">
                Disclamer:
            </p>
            <p class="modal-text-cr">
                © HoYoverse. All rights reserved. 
                <br>
                HoYoverse and Genshin Impact are trademarks, services marks, or registered trademarks of HoYoverse.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.background {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal {
    padding: 20px;
    border-radius: 10px;
    width: 80%; 
    max-width: 800px; 
    z-index: 2;
}
.modal-title {
    color: #f3db7d;
}
.modal-hr {
    background-color: #B29E99;
    border: none;
    height: 1px;
}
.modal-text {
    color: #f3e9c1;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.a-modal {
    color: #F9B61A;
    font-style: italic;
}
.a-modal:hover {
    color: #e9c777;
    font-style: italic;
}
.modal-text-cr {
    color: #B29E99;
    margin: 5px 0;
    padding-top: 5px;
}
</style>