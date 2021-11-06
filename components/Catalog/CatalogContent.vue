<template>
  <section class="content">

    <div class="catalog-toolbar">
      <searchResults :result="productsLength"/>
      <filterBtn/>
      <selectSort/>
      <gridOptions/>
      <search/>
    </div>

    <productList :items="items" v-if="items"/>
    <errorMessage :title="'Товары не найдены'" v-else/>

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

  </section>
</template>

<script>
import filterBtn from '@/components/UI/Toolbar/FilterBtn.vue'
import selectSort from '@/components/UI/Toolbar/SelectSort.vue'
import gridOptions from '@/components/UI/Toolbar/GridOptions.vue'
import search from '@/components/UI/Toolbar/Search.vue'
import searchResults from '@/components/UI/Toolbar/SearchResults.vue'
import productList from '@/components/Catalog/ProductList.vue'
import errorMessage from '@/components/Catalog/ErrorMessage.vue'
import paginationMixin from '@/mixins/pagination.mixin.js'

export default {
  mixins: [paginationMixin],
  components: {
    filterBtn,
    selectSort,
    gridOptions,
    search,
    searchResults,
    productList,
    errorMessage
  },
  computed: {
    filteredProducts: function () {
      let products = this.getProducts()
      return products.filter((item) => {
        return (this.getSearchValue().length === 0 || item.title.toLowerCase().includes(this.getSearchValue().toLowerCase()))
        && (this.getCategoriesActive().length === 0 || this.getCategoriesActive().includes(item.categoryId))
        && (this.getBrandsActive().length === 0 || this.getBrandsActive().includes(item.brandId))
        && (this.getPriceRangeActive() === {} || item.price >= this.getPriceRangeActive().min && item.price <= this.getPriceRangeActive().max)
        && (item.price > this.getPriceSlider()[0])
        && (item.price <= this.getPriceSlider()[1])
        && (this.getRatingRangeActive() === {} || item.rating >= this.getRatingRangeActive().min && item.rating <= this.getRatingRangeActive().max)
      }).sort((a, b) => {
      	if (this.getSortBy() == 'price') {
					return a[this.getSortBy()] - b[this.getSortBy()]
        } else if (this.getSortBy() == 'rating') {
          return b[this.getSortBy()] - a[this.getSortBy()]
        } else if (this.getSortBy() == 'id') {
        	return a[this.getSortBy()].toString().localeCompare(b[this.getSortBy()].toString())
        }
      })
    },
    productsLength () {
      let products = this.filteredProducts
      this.setupPagination(products)
      return products.length
    }
  },
  methods: {
    getProducts () {
      return this.$store.getters.getProducts
    },
    getSearchValue () {
      return this.$store.getters.getSearchValue
    },
    getSortBy () {
      return this.$store.getters.getSortBy
    },
    getCategoriesActive () {
      return this.$store.getters.getCategoriesActive
    },
    getBrandsActive () {
      return this.$store.getters.getBrandsActive
    },
    getPriceRangeActive () {
      return this.$store.getters.getPriceRangeActive
    },
    getPriceSlider () {
      return this.$store.getters.getPriceSlider
    },
    getRatingRangeActive () {
      return this.$store.getters.getRatingRangeActive
    }
  }
}
</script>
