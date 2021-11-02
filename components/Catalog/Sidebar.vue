<template>
  <div class="sidebar">
    <catalogFilter />
  </div>
</template>

<script>
import catalogFilter from '@/components/Catalog/СatalogFilter.vue'

export default {
  components: {
    catalogFilter
  }
}
</script>

<style lang="scss">
.sidebar {
  width: 24%;
  padding-top: 22px;
}
</style>
