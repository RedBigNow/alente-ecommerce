<template>
  <div class="pagination">
    <button class="pagination__btn prev-page">
      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.1059 13L1.81738 7L8.1059 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <ul class="pagination__list">
      <li class="pagination__item">1</li>
      <li class="pagination__item">2</li>
      <li class="pagination__item">3</li>
      <li class="pagination__item">4</li>
      <li class="pagination__item">5</li>
      <li class="pagination__item pagination__item--active">6</li>
      <li class="pagination__item">7</li>
      <li class="pagination__item">8</li>
      <li class="pagination__item">9</li>
      <li class="pagination__item">10</li>
    </ul>
    <button class="pagination__btn next-page">
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.49292 1L7.78137 7L1.49292 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 80px;
}

.pagination__btn {
  padding: 12px 18px;
  border: none;
  border-radius: 50%;
  background: #ededed;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: #d8d8d8;
  }
}

.pagination__list {
  display: flex;
  align-items: center;
  margin: 0 18px;
  background: #ededed;
  border-radius: 20px;
}

.pagination__item {
  width: 45px;
  text-align: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: #d8d8d8;
  }

  &.pagination__item--active {
    color: #fff;
    background: #6F64F8;
  }
}
</style>
