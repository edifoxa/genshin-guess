<template>
    <div class="container">
        <h2 class="text">{{ intro }}</h2>
    </div>
</template>

<script>
export default {
    props: ['intro']
}
</script>

<style scoped>
.container {
  padding: 1.5em 4em;
  max-width: max-content;
  width: fit-content;
  margin-top: 20px;
}
</style>