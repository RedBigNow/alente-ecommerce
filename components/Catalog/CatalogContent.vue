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
import Search from '@/components/UI/Search.vue'
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

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 80px;
}

.pagination__list {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 18px;
  background: #ededed;
  border-radius: 20px;

  li {
    a {
      display: block;
      width: 45px;
      text-align: center;
      padding: 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: .3s;

      &:hover {
        color: #6F64F8;
      }
    }

    &.active {
      a {
        color: #fff;
        background: #6F64F8;
      }
    }

    &:first-child {
      position: absolute;
      left: -60px;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      background: #ededed;
      cursor: pointer;
      transition: .3s;

      &:hover {
        background: #d8d8d8;
      }

      a {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;

        &::after {
          content: '';
          position: absolute;
          left: 16px;
          top: 15px;
          background-image: url('~@/assets/img/arrow-left.svg');
          background-size: 100%;
          background-repeat: no-repeat;
          width: 10px;
          height: 100%;
        }
      }
    }

    &:last-child {
      position: absolute;
      right: -60px;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      background: #ededed;
      cursor: pointer;
      transition: .3s;

      &:hover {
        background: #d8d8d8;
      }

      a {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
      }

      &::after {
        content: '';
        position: absolute;
        right: 16px;
        top: -16px;
        background-image: url('~@/assets/img/arrow-left.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 10px;
        height: 100%;
        transform: rotate(180deg);
      }
    }
  }
}

.error-message {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  font-size: 24px;

  p {
    font-size: 24px;
  }
}
</style>
