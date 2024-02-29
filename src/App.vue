<template>
  <div class="bg">
    <div class="main">
      <div class="upper-container">
        <router-link to="/" class="logo">
        <img src="./assets/logo.png" alt="logo, homepage">
        </router-link>
      </div>
      <router-view/>
    </div>
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

.main {
  height: max-content;
  min-height: 90vh;
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
  font-size: 1.5rem;
}

h3 {
  color: #B29E99;
}

a {
  all: unset;
  cursor: pointer;
}

footer {
  margin-top: 50px;
  margin-bottom: 10px;
  color: #7D796A;
}

.container {
  margin: 10px;
  width: 30%;
  height: auto;
  background-color: #0D0F26;
  border: solid 5px #59403A;
  border-radius: 20px;
  text-decoration: none;
  padding: 0.7em 0.7em;
  }

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
