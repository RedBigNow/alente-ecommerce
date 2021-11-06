<template>
  <vue-slider ref="slider" v-model="priceSlider" v-bind="getPriceSliderOptions"/>
</template>

<script>
// import component
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
  components: {
    VueSlider
  },
  computed: {
    getPriceSliderOptions () {
      return this.$store.getters.getPriceSliderOptions
    },
    priceSlider: {
      get () {
        return this.$store.state.priceSlider
      },
      set (value) {
        this.$store.commit('updatePriceRangeSlider', value)
      }
    },
    priceRangeActive: {
      get () {
        return this.$store.state.priceRangeActive
      },
      set (value) {
        this.$store.commit('updatePriceRange', value)
      }
    }
  }
}
</script>
