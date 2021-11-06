<template>
  <div class="filter">
    <p>Filter</p>
    <form class="filter__form">

      <fieldset class="filter-item">
        <span class="filter-item__title">Multi Range</span>
        <div class="filter-item__radio" v-for="item in getPriceRange" :key="item.id">
          <input class="radio-input"
            v-model="priceRangeActive"
            name="multi_range"
            type="radio"
            :id="'multi_range_' + item.id"
            :value="{min: item.min, max: item.max}"
          >
          <label :for="'multi_range_' + item.id">{{ item.text }}</label>
        </div>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Slider</span>
        <div class="range-values">
          <p>{{ getPriceSlider[0] }} - {{ getPriceSlider[1] }}</p>
        </div>
        <priceSlider/>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Category</span>
        <div class="filter-item__checkbox" v-for="item in getCategories" :key="item.id">
          <input class="checkbox-input" type="checkbox" v-model="categoriesActive" name="category" :id="'category_' + item.id" :value="item.id">
          <label :for="'category_' + item.id">{{ item.name }} <filterItemSup :id="item.id" :filterType="'categoryId'" /> </label>
        </div>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Brand</span>
        <div class="filter-item__checkbox" v-for="item in getBrands" :key="item.id">
          <input class="checkbox-input" type="checkbox" v-model="brandsActive" name="brand" :id="'brand_' + item.id" :value="item.id">
          <label :for="'brand_' + item.id">{{ item.title }} <filterItemSup :id="item.id" :filterType="'brandId'" /></label>
        </div>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Rating</span>
        <div class="rating-area">
          <input type="radio" v-model="ratingRangeActive" id="star-5" name="rating" :value="{min: 5.0, max: 5.0}">
          <label for="star-5" title="Оценка «5»"></label>
          <input type="radio" v-model="ratingRangeActive" id="star-4" name="rating" :value="{min: 4.0, max: 4.9}">
          <label for="star-4" title="Оценка «4»"></label>
          <input type="radio" v-model="ratingRangeActive" id="star-3" name="rating" :value="{min: 3.0, max: 3.9}">
          <label for="star-3" title="Оценка «3»"></label>
          <input type="radio" v-model="ratingRangeActive" id="star-2" name="rating" :value="{min: 2.0, max: 2.9}">
          <label for="star-2" title="Оценка «2»"></label>
          <input type="radio" v-model="ratingRangeActive" id="star-1" name="rating" :value="{min: 0, max: 1.9}">
          <label for="star-1" title="Оценка «1»"></label>
        </div>
      </fieldset>

    </form>

    <div class="filter__btn-wrapper">
      <AppButton btnClass="btn-apply" @click="changeFilterStatus">Apply</AppButton>
      <AppButton @click="clearFilter">Clear all filters</AppButton>
    </div>
  </div>
</template>

<script>
import priceSlider from '@/components/UI/Filter/PriceSlider.vue'
import filterItemSup from '@/components/UI/Filter/FilterItemSup.vue'

export default {
  components: {
    priceSlider,
    filterItemSup
  },
  created () {
    this.$store.dispatch('setCategories')
    this.$store.dispatch('setBrands')
  },
  computed: {
    getCategories () {
      return this.$store.getters.getCategories
    },
    categoriesActive: {
      get () {
        return this.$store.state.categoriesActive
      },
      set (value) {
        this.$store.commit('updateCategories', value)
      }
    },
    getBrands () {
      return this.$store.getters.getBrands
    },
    brandsActive: {
      get () {
        return this.$store.state.brandsActive
      },
      set (value) {
        this.$store.commit('updateBrands', value)
      }
    },
    getPriceRange () {
      return this.$store.getters.getPriceRange
    },
    priceRangeActive: {
      get () {
        return this.$store.state.priceRangeActive
      },
      set (value) {
        this.$store.commit('updatePriceRange', value)
      }
    },
    getPriceSlider () {
      return this.$store.getters.getPriceSlider
    },
    getRatingRange () {
      return this.$store.getters.getRatingRange
    },
    ratingRangeActive: {
      get () {
        return this.$store.state.ratingRangeActive
      },
      set (value) {
        this.$store.commit('updateRatingRange', value)
      }
    }
  },
  methods: {
    changeFilterStatus () {
      this.$store.dispatch('changeFilterStatus')
    },
    clearFilter () {
      this.$store.dispatch('clearFilter')
    }
  }
}
</script>
