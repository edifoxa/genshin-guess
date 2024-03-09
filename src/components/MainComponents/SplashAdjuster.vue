<template>
  <div>
    <div class="splash-container" :style="{ width: uncoverWidth }">
      <img class="splashart"
        :src="require(`@/assets/splasharts/${currentSplash}`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentSplash', 'hints'],
  data() {
    return {
      imagePercentage: 10,
      containerWidth: 500
    }
  },
  computed: {
    uncoverWidth() {
      return `${(this.imagePercentage / 100) * this.containerWidth}px`
    }
  },
  watch: {
    hints: function() {
      this.uncover()
    }
  },
  methods: {
    uncover() {
      this.imagePercentage += 2
      if (this.imagePercentage > 100) {
        this.imagePercentage = 100
      }
    }
  }
}
</script>

<style>
.splash-container {
  overflow: hidden;
  transition: width 0.5s; 
  border: 3px solid #59403A;
  border-radius: 10px;
  width: 50%;
}
.splashart {
  width: auto;
  height: 100%;
  max-height: 400px;
}
</style>
