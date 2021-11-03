<template>
  <div class="product-item" :class="{ full : !getGrid}">
    <div class="product-item__wrapper">
      <div class="product-item__img">
        <nuxt-link to="/">
          <img :src="product.image" :alt="product.title">
        </nuxt-link>
      </div>
      <div class="product-item__info">
        <div class="product-item__extra">
          <div class="product-item__rating"><span>{{ product.rating }}</span></div>
          <div class="product-item__price"><span>${{ product.price }}</span></div>
        </div>
        <nuxt-link to="/" class="product-item__title">{{ product.title }}</nuxt-link>
        <p class="product-item__descr">{{ product.desc }}</p>
      </div>
    </div>
    <div class="product-item__btns">
      <button class="product-btn product-btn--wishlist"><span>Wishlist</span></button>
      <button class="product-btn product-btn--cart"><span>Add to cart</span></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    getGrid () {
      return this.$store.getters.getGrid
    }
  }
}
</script>
