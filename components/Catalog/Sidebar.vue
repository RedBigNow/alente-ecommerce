<template>
  <div class="sidebar" :class="{ show : getFilter}">
    <div class="close-btn" @click="showFilter"></div>
    <catalogFilter />
  </div>
</template>

<script>
import catalogFilter from '@/components/Catalog/СatalogFilter.vue'

export default {
  components: {
    catalogFilter
  },
  computed: {
    getFilter () {
      return this.$store.getters.getFilter
    }
  },
  methods: {
    showFilter () {
      this.$store.dispatch('showFilter')
    }
  }
}
</script>
