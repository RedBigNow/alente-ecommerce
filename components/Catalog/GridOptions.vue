<template>
  <div class="grid-options">
    <div class="grid-options__item" :class="{ active: getGrid }" @click="changeGrid(true)">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.47046" y="1" width="6.28857" height="6" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="11.9513" y="1" width="6.28845" height="6" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="11.9513" y="11" width="6.28845" height="6" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="1.47046" y="11" width="6.28857" height="6" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="grid-options__item" :class="{ active: !getGrid }" @click="changeGrid(false)">
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.11511 1H14.7401" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.11511 7H14.7401" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.11511 13H14.7401" stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getGrid () {
      return this.$store.getters.getGrid
    }
  },
  methods: {
    changeGrid (status) {
      this.$store.dispatch('changeGrid', status)
    }
  }
}
</script>
