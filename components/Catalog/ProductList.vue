<template>
  <div class="product-list">
    <productItem />
    <productItem />
    <productItem />
    <productItem />
    <productItem />
    <productItem />
  </div>
</template>

<script>
import productItem from '@/components/Catalog/ProductItem.vue'

export default {
  components: {
    productItem
  }
}
</script>

<style lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 -14px;
}
</style>
