<template>
  <div class="product-list">
    <productPreview
      v-for="item in items"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script>
import productPreview from '@/components/Catalog/ProductPreview.vue'
export default {
  components: {
    productPreview
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>
