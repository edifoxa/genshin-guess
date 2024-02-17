<template>
        <router-link to="/classic">        
            <h2 class="text">{{ title }}</h2>
            <h3 class="text">{{ description }}</h3>
        </router-link>
</template>

<script>
export default {
    props: ['title','description']
}
</script>
