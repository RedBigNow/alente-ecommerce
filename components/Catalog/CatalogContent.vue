<template>
  <div class="content">

    <section class="catalog-toolbar">

      <span class="search-results">7,618 results found in 5ms</span>

      <div class="filter-btn" @click="showFilter">
        <div class="filter-btn__icon">
          <img src="~@/assets/img/filter.svg">
        </div>
      </div>

      <selectSort/>

      <gridOptions/>

    </section>

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
