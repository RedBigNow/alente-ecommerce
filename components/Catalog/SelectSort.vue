<template>
  <div class="sort-by">
    <select class="sort-by__select">
      <option class="sort" data-sort="default" value="asc">Default</option>
      <option class="sort" data-sort="price" value="asc">Price</option>
      <option class="sort" data-sort="raiting" value="asc">Raiting</option>
    </select>
  </div>
</template>

<style lang="scss">
select.sort-by__select {
  position: relative;
  padding: 12px 40px 12px 14px;
  font-size: 14px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  border: none;
  appearance: none;
  cursor: pointer;
  background-color: #fff;
  background-image: url('~@/assets/img/arrow-down.svg');
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: center right 10px;
}
</style>
