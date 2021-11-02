<template>
  <div class="content">
    <div class="catalog-toolbar">
      <span class="search-results">7,618 results found in 5ms</span>
      <selectSort/>
      <gridOptions/>
    </div>
    <Search/>
    <productList/>
    <pagination/>
  </div>
</template>

<script>
import selectSort from '@/components/Catalog/SelectSort.vue'
import gridOptions from '@/components/Catalog/GridOptions.vue'
import Search from '@/components/UI/Search.vue'
import productList from '@/components/Catalog/ProductList.vue'
import pagination from '@/components/Catalog/Pagination.vue'

export default {
  components: {
    selectSort,
    gridOptions,
    Search,
    productList,
    pagination
  }
}
</script>


<style lang="scss">
.content {
  width: 74%;
}

.catalog-toolbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end
}

.search-results {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
