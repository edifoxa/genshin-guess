<template>
    <div class="background" @click.self="closeModal">
        <div class="modal container">
            <h2>About</h2>
        </div>
    </div>
</template>

<script>
// props here declared in App.vue in <Modal>
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
    }
</style>