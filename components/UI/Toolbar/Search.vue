<template>
  <div class="form-search">
    <input class="form-search__input" type="text" name="search" id="search" placeholder="Search hear" v-model="searchValue">
  </div>
</template>

<script>
export default {
  computed: {
    searchValue: {
      get () {
        return this.$store.state.searchValue
      },
      set (value) {
        this.$store.commit('updateSearchValue', value)
      }
    }
  }
}
</script>
