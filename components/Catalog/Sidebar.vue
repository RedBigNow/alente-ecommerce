<template>
  <section class="sidebar" :class="{ show : getFilterStatus}">
    <div class="close-btn" @click="changeFilterStatus"></div>
    <catalogFilter />
  </section>
</template>

<script>
import catalogFilter from '@/components/Catalog/СatalogFilter.vue'

export default {
  components: {
    catalogFilter
  },
  computed: {
    getFilterStatus () {
      return this.$store.getters.getFilterStatus
    }
  },
  methods: {
    changeFilterStatus () {
      this.$store.dispatch('changeFilterStatus')
    }
  }
}
</script>
