<template>
  <div class="bg">
    <router-link to="/" class="logo">
      <img src="./assets/logo.png" alt="logo, homepage">
    </router-link>
    <router-view/>
    <footer class="text">
      Genshin Guess - 2024
    </footer>
  </div>
</template>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
  height: 100%;
  margin: 0;
}

.bg {
  height: 100vh;
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url("./assets/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  overflow-x: hidden;
}

.logo img {
  margin-top: 20px;
  margin-bottom: 30px;
}

.text {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: 400;
}

h2 {
  color: #F5E8AF;
}

h3 {
  color: #B29E99;
}

a {
  all: unset;
  cursor: pointer;
}

footer {
  margin-top: 30px;
  margin-bottom: 10px;
  color: #7D796A;
}

</style>
