<template>
  <div class="content">
    <div class="catalog-toolbar">
      <span class="search-results">7,618 results found in 5ms</span>
      <selectSort/>
      <gridOptions/>
    </div>
    <Search
      :value="search"
      placeholder="Search hear"
      @search="search = $event"
    />
    {{ AllFilters }}

    <productList :items="items" v-if="items"/>

    <div class="error-message" v-else>
      <p>Товары не найдены</p>
    </div>

    <div class="pagination" v-if="items">
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="''"
        :next-text="''"
        :container-class="'pagination__list'"
        :page-class="'pagination__item'"
      />
    </div>

  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin.js'
import selectSort from '@/components/Catalog/SelectSort.vue'
import gridOptions from '@/components/Catalog/GridOptions.vue'
import Search from '@/components/Catalog/Search.vue'
import productList from '@/components/Catalog/ProductList.vue'

export default {
  mixins: [paginationMixin],
  components: {
    selectSort,
    gridOptions,
    Search,
    productList
  },
  data () {
    return {
      search: '',
      grid: true
    }
  },
  computed: {
    AllFilters () {
      let products = this.getProducts(),
        search = this.search

      if(!search) {
        this.setupPagination(products)
      } else {
        search = search.trim().toLowerCase()
        products = products.filter(function (item) {
          if(item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })
        this.setupPagination(products)
      }

    }
  },
  methods: {
    getProducts () {
      return this.$store.getters.getProducts
    }
  }
}
</script>
