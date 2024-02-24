<template>
    <div class="container">
      <span class="text">{{ formattedTime }}</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        remainingTime: null,
      };
    },
    mounted() {
      setInterval(() => {
        this.updateRemainingTime();
      }, 1000);
  
      // Initial update
      this.updateRemainingTime();
    },
    methods: {
      updateRemainingTime() {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const difference = tomorrow - now;
        this.remainingTime = difference;

        if (this.remainingTime == 0) {
            this.$emit('end')
        }
      }
    },
    computed: {
      formattedTime() {
        const hours = Math.floor(this.remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .text {
    color: #F9B61A;
  }
  </style>