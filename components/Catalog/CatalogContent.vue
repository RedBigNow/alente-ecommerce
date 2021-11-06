<template>
  <div class="content">

    <section class="catalog-toolbar">

      <span class="search-results">{{productsLength}} results found</span>

      <div class="filter-btn" @click="showFilter">
        <div class="filter-btn__icon">
          <img src="~@/assets/img/filter.svg">
        </div>
      </div>

      <selectSort/>

      <gridOptions/>

    </section>

    <!-- <Search
      :value="search"
      placeholder="Search hear"
      @search="search = $event"
    /> -->

    <div class="form-search">
      <input class="form-search__input" type="text" name="search" id="search" placeholder="Search hear" v-model="search">
    </div>

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
    // Search,
    productList
  },
  data () {
    return {
      search: '',
      grid: true
    }
  },
  computed: {
    filterProducts: function () {
      let products = this.getProducts()
      return products.filter((item) => {
        return (this.search.length === 0 || item.title.toLowerCase().includes(this.search.toLowerCase()))
        && (this.getCategoriesActive().length === 0 || this.getCategoriesActive().includes(item.categoryId))
        && (this.getBrandsActive().length === 0 || this.getBrandsActive().includes(item.brandId))
        && (this.getPriceRangeActive() === {} || item.price >= this.getPriceRangeActive().min && item.price <= this.getPriceRangeActive().max)
        && (this.getPriceSlider()[0] === 0 || item.price > this.getPriceSlider()[0])
        && (this.getPriceSlider()[1] === 99999 || item.price <= this.getPriceSlider()[1])
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
    AllFilters () {
      let products = this.filterProducts
      this.setupPagination(products)
    },
    productsLength () {
      return this.filterProducts.length
    }
  },
  methods: {
    getProducts () {
      return this.$store.getters.getProducts
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
    },
    getSortBy () {
      return this.$store.getters.getSortBy
    },
    showFilter () {
      this.$store.dispatch('showFilter')
    }
  }
}
</script>

<style lang="scss">
.filter-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  cursor: pointer;

  .filter-btn__icon {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 992px) {
  .filter-btn {
    display: flex;
  }
}

@media screen and (max-width: 360px) {
  .filter-btn {
    width: 30px;
    height: 30px;
    margin-right: 12px;
    padding: 7px;
  }
}
</style>
