<template>
  <div class="product-item">
    <div class="product-item__wrapper">
      <nuxt-link to="/">
        <div class="product-item__img">
          <img src="@/static/img/products/apple-watch.png" alt="">
        </div>
      </nuxt-link>
      <div class="product-item__info">
        <div class="product-item__rating"><span>3.4</span></div>
        <div class="product-item__price"><span>$399</span></div>
      </div>
      <nuxt-link to="/">
        <h2 class="product-item__title">Apple Watch Series 4 GPS</h2>
      </nuxt-link>
      <p class="product-item__descr">Redesigned from scratch and completely revised.</p>
    </div>
    <div class="product-item__btns">
      <button class="product-btn product-btn--wishlist"><span>Wishlist</span></button>
      <button class="product-btn product-btn--cart"><span>Add to cart</span></button>
    </div>
  </div>
</template>

<style lang="scss">
.product-item {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  width: 31%;
  margin: 0px 14px 28px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  overflow: hidden;
}

.product-item__wrapper {
  padding: 22px;
}

.product-item__img {
  padding: 10px 10px 25px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 100%;
    max-height: 300px;
  }
}

.product-item__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-item__rating {
  position: relative;
  padding: 6px 32px 6px 8px;
  color: #fff;
  background: #6F64F8;
  border-radius: 3px;
  font-size: 0.8rem;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 9px;
    background-image: url('~@/assets/img/star-white.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 14px;
    height: 14px;
  }
}

h2.product-item__title {
  color: #2c2c2c;
  font-size: 0.9rem;
  padding-top: 16px;
}

p.product-item__descr {
  font-weight: 300;
  font-size: 0.7rem;
}

.product-item__btns {
 display: flex;
 align-items: center;
 justify-content: center;
}

.product-btn {
  width: 50%;
  padding: 14px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: .3s;

  &.product-btn--wishlist {
    background: #ededed;

    &:hover {
      background: #d8d8d8;
    }

    span {
      position: relative;
      padding-left: 15px;

      &::after {
        content: '';
        position: absolute;
        left: -6px;
        top: 1px;
        background-image: url('~@/assets/img/wishlist.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 15px;
        height: 13px;
      }
    }
  }

  &.product-btn--cart {
    background-color: #6F64F8;
    color: #fff;

    &:hover {
      background-color: #5e53de;
    }

    span {
      position: relative;
      padding-left: 15px;

      &::after {
        content: '';
        position: absolute;
        left: -6px;
        top: 0;
        background-image: url('~@/assets/img/cart.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
