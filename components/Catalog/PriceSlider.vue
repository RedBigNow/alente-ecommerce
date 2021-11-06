<template>
  <vue-slider ref="slider" v-model="priceSlider" v-bind="getPriceSliderOptions"/>
</template>

<script>
// import component
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
// import theme
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

<style lang="scss">
.vue-slider {
  padding: 8px !important;
}

.vue-slider-rail {
  background-color: #ededed;
}

.vue-slider-process {
  background-color: #6F64F8;
}

.vue-slider-dot-handle {
  background-color: #6F64F8;
  box-shadow: none;

  &.vue-slider-dot-handle-focus {
    box-shadow: 0 0 0px 3px rgba(0, 0, 0, 0.1);
  }
}

.vue-slider-dot-tooltip-inner {
  display: none;
}
</style>
