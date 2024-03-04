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
  padding: 1.5em 5em;
  max-width: max-content;
  width: fit-content;
}
</style>