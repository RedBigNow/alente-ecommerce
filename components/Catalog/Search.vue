<template>
  <div class="form-search">
    <input class="form-search__input" type="text" name="search" id="search" value="" :placeholder="placeholder" v-model="search">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return {
      search: this.value
    }
  },
  watch: {
    search (val) {
      // console.log(val)
      this.$emit('search', val);
    }
  }
}
</script>
