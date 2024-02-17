<template>       
    <h2 class="text">{{ title }}</h2>
    <h3 class="text">{{ description }}</h3>
</template>

<script>
export default {
    props: ['title','description']
}
</script>
