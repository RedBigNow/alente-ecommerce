<template>
  <div>
    <sup>{{ totalSup }}</sup>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    filterType: {
      type: String
    }
  },
  data () {
    return {
      sup: 0
    }
  },
  computed: {
    productsFilter: function () {
      if (this.filterType == 'categoryId') {

        let products = this.getProducts()
        return products.filter((item) => {
          return (item.categoryId == this.id)
          && (this.getBrandsActive().length === 0 || this.getBrandsActive().includes(item.brandId))
          && (this.getPriceRangeActive() === {} || item.price >= this.getPriceRangeActive().min && item.price <= this.getPriceRangeActive().max)
          && (this.getPriceSlider()[0] === 0 || item.price > this.getPriceSlider()[0])
          && (this.getPriceSlider()[1] === 99999 || item.price <= this.getPriceSlider()[1])
          && (this.getRatingRangeActive() === {} || item.rating >= this.getRatingRangeActive().min && item.rating <= this.getRatingRangeActive().max)
        })

      } else if (this.filterType == 'brandId') {

        let products = this.getProducts()
        return products.filter((item) => {
          return (item.brandId == this.id)
          && (this.getCategoriesActive().length === 0 || this.getCategoriesActive().includes(item.categoryId))
          && (this.getPriceRangeActive() === {} || item.price >= this.getPriceRangeActive().min && item.price <= this.getPriceRangeActive().max)
          && (this.getPriceSlider()[0] === 0 || item.price > this.getPriceSlider()[0])
          && (this.getPriceSlider()[1] === 99999 || item.price <= this.getPriceSlider()[1])
          && (this.getRatingRangeActive() === {} || item.rating >= this.getRatingRangeActive().min && item.rating <= this.getRatingRangeActive().max)
        })

      }
    },
    totalSup () {
      let products = this.productsFilter
      return this.sup = products.length
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
  }
}
</script>
