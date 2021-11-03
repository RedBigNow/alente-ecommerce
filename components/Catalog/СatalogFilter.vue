<template>
  <div class="filter">
    <p>Фильтр</p>
    <form class="filter__form">

      <radioFieldset title="Multi Range" alias="multi_range" :items="getPriceRange"/>

      <fieldset class="filter-item">
        <span class="filter-item__title">Slider</span>
      </fieldset>

      <checkboxFieldset title="Category" alias="category" :items="getCategories"/>

      <checkboxFieldset title="Brand" alias="brand" :items="getBrands"/>

      <fieldset class="filter-item">
        <span class="filter-item__title">Rating</span>
        <div class="rating-area">
          <input type="radio" id="star-5" name="rating" value="5">
          <label for="star-5" title="Оценка «5»"></label>
          <input type="radio" id="star-4" name="rating" value="4">
          <label for="star-4" title="Оценка «4»"></label>
          <input type="radio" id="star-3" name="rating" value="3">
          <label for="star-3" title="Оценка «3»"></label>
          <input type="radio" id="star-2" name="rating" value="2">
          <label for="star-2" title="Оценка «2»"></label>
          <input type="radio" id="star-1" name="rating" value="1">
          <label for="star-1" title="Оценка «1»"></label>
          <sup>1820</sup>
        </div>
      </fieldset>

    </form>

    <div class="filter__btn-wrapper">
      <AppButton btnClass="btn-apply" @click="showFilter">Apply</AppButton>
      <AppButton>Clear all filters</AppButton>
    </div>
  </div>
</template>

<script>
import radioFieldset from '@/components/Catalog/RadioFieldset.vue'
import checkboxFieldset from '@/components/Catalog/CheckboxFieldset.vue'

export default {
  components: {
    radioFieldset,
    checkboxFieldset
  },
  created () {
    this.$store.dispatch('setCategories')
    this.$store.dispatch('setBrands')
  },
  computed: {
    getCategories () {
      return this.$store.getters.getCategories
    },
    getBrands () {
      return this.$store.getters.getBrands
    },
    getPriceRange () {
      return this.$store.getters.getPriceRange
    }
  },
  methods: {
    showFilter () {
      this.$store.dispatch('showFilter')
    }
  }
}
</script>
