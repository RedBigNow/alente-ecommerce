<template>
  <div class="filter">
    <p>Фильтр</p>
    <form class="filter__form">

      <fieldset class="filter-item">
        <span class="filter-item__title">Multi Range</span>
        <div class="filter-item__radio">
          <input class="radio-input" name="range_price" id="range_price_1" value="10" type="radio">
          <label for="range_price_1">$10</label>
        </div>
        <div class="filter-item__radio">
          <input class="radio-input" name="range_price" id="range_price_2" value="10-100" type="radio">
          <label for="range_price_2">$10-$100</label>
        </div>
        <div class="filter-item__radio">
          <input class="radio-input" name="range_price" id="range_price_3" value="10-500" type="radio">
          <label for="range_price_3">$100-$500</label>
        </div>
        <div class="filter-item__radio">
          <input class="radio-input" name="range_price" id="range_price_4" value="500" type="radio">
          <label for="range_price_4">$500</label>
        </div>
        <div class="filter-item__radio">
          <input class="radio-input" name="range_price" id="range_price_5" value="all" type="radio" checked>
          <label for="range_price_5">All</label>
        </div>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Slider</span>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Category</span>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="category" id="category_1" value="1">
          <label for="category_1">Cell Phones <sup>1920</sup></label>
        </div>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="category" id="category_2" value="2">
          <label for="category_2">Computers & Tablets <sup>1820</sup></label>
        </div>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="category" id="category_3" value="3">
          <label for="category_3">Cell Phone Accessories <sup>462</sup></label>
        </div>
      </fieldset>

      <fieldset class="filter-item">
        <span class="filter-item__title">Brand</span>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="brand" id="brand_1" value="1">
          <label for="brand_1">Insigni <sup>220</sup></label>
        </div>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="brand" id="brand_2" value="2">
          <label for="brand_2">Samsung <sup>120</sup></label>
        </div>
        <div class="filter-item__checkbox">
          <input class="checkbox-input" type="checkbox" name="brand" id="brand_3" value="3">
          <label for="brand_3">Apple <sup>320</sup></label>
        </div>
      </fieldset>

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
      <AppButton>Clear all filters</AppButton>
    </div>
  </div>
</template>
