<template>
  <div class="filter-btn" @click="changeFilterStatus">
    <div class="filter-btn__icon">
      <img src="~@/assets/img/filter.svg">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeFilterStatus () {
      this.$store.dispatch('changeFilterStatus')
    }
  }
}
</script>
