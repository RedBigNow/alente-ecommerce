<template>
  <div class="sort-by">
    <select class="sort-by__select" v-model="sortBy">
      <option value="id">Default</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    sortBy: {
      get () {
        return this.$store.state.sortBy
      },
      set (value) {
        this.$store.commit('updateSortBy', value)
      }
    }
  }
}
</script>
