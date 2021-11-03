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

<style lang="scss">
.form-search {
  padding: 22px 0 26px;
}

.form-search__input {
  padding: 18px 30px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  border: none;
  background-color: #fff;
  background-image: url('~@/assets/img/search.svg');
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center right 35px;

  &::placeholder {
    color: #999;
  }
}
</style>
