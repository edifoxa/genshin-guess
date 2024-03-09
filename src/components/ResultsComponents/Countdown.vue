<template>
  <div class="countdown">
    <p class="countdown-text">Next characters in:</p>
    <p class="text ">{{ formattedTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingTime: null,
    }
  },
  mounted() {
    setInterval(() => {
      this.updateRemainingTime()
    }, 1000)
    this.updateRemainingTime()
  },
  methods: {
    updateRemainingTime() {
      const now = new Date()
      const time = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0') + ":" + now.getSeconds().toString().padStart(2, '0')
      // console.log(time)

      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
      this.remainingTime = tomorrow - now

      if (time == "00:00:00") {
        localStorage.clear()
      }
    }
  },
  computed: {
    formattedTime() {
      const hours = Math.floor(this.remainingTime / (1000 * 60 * 60))
      const minutes = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((this.remainingTime % (1000 * 60)) / 1000)
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  }
}
</script>

<style scoped>
.text {
  color: #F9B61A;
  font-size: x-large;
}
.countdown {
  text-align: center;
  margin: 15px;
  border: solid 2px #f3db7d;
  width: fit-content;
  border-radius: 8px;
  padding: 12px;
}
p {
  margin: 5px;
}
.countdown-text {
  color: #f3e9c1;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>