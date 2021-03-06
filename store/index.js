import axios from 'axios'
import _ from 'lodash'

export const state = () => ({
  preloader: true,
  products: [],
  categories: [],
  categoriesActive: [],
  brands: [],
  brandsActive: [],
  maxPrice: 0,
  priceRange: [
    { id: 1, text: '$10', min: 0, max: 10 },
    { id: 2, text: '$10-$100', min: 10, max: 100 },
    { id: 3, text: '$100-$500', min: 100, max: 500 },
    { id: 4, text: '$500', min: 500 },
    { id: 5, text: 'All', min: 0 }
  ],
  priceRangeActive: { min: 0 },
  priceSlider: [0, 0],
  priceSliderOptions: { min: 0, max: 0, interval: 1, dotSize: 16, height: 6 },
  ratingRangeActive: { min: 0, max: 5 },
  sortBy: 'id',
  grid: true,
  searchValue: '',
  filterStatus: false
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  hidePreloader (state) {
    state.preloader = false
  },
  setMaxPrice (state, value) {
    state.maxPrice = value
    state.priceRangeActive.min = 0
    state.priceRangeActive.max = value
    state.priceSlider = [0, value]
    state.priceSliderOptions.min = 0
    state.priceSliderOptions.max = value
    state.priceRange[3].max = value
    state.priceRange[4].max = value
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  setBrands (state, brands) {
    state.brands = brands
  },
  updateSearchValue (state, value) {
    state.searchValue = value
  },
  updateCategories (state, value) {
    state.categoriesActive = value
  },
  updateBrands (state, value) {
    state.brandsActive = value
  },
  updatePriceRange (state, value) {
    state.priceRangeActive = value
    state.priceSlider = [value.min, value.max]
    state.priceSliderOptions.min = value.min
    state.priceSliderOptions.max = value.max
  },
  updatePriceRangeSlider (state, value) {
    state.priceSlider = value
  },
  updateRatingRange (state, value) {
    state.ratingRangeActive = value
  },
  updateSortBy (state, value) {
    state.sortBy = value
  },
  changeGrid (state, status) {
    state.grid = status
  },
  changeFilterStatus (state) {
    state.filterStatus = !state.filterStatus
  },
  clearFilter (state) {
    state.categoriesActive = []
    state.brandsActive = []
    state.priceRangeActive.min = 0
    state.priceRangeActive.max = state.maxPrice
    state.priceSlider = [0, state.maxPrice]
    state.priceSliderOptions.min = 0
    state.priceSliderOptions.max = state.maxPrice
    state.ratingRangeActive.min = 0
    state.ratingRangeActive.max = 5
  },
  clearRating (state) {
    state.ratingRangeActive.min = 0
    state.ratingRangeActive.max = 5
  }
}

export const actions = {
  nuxtServerInit ({commit}) {
    return axios.get('https://611a2bc9cbf1b30017eb5559.mockapi.io/product')
      .then(res => {
        const productsArray = []
        for (let key in res.data) {
          productsArray.push( {...res.data[key]} )
        }
        commit('setProducts', productsArray)
        this.dispatch('setMaxPrice')
      })
      .catch(e => console.log(e))
  },
  setCategories ({commit}) {
    return axios.get('https://611a2bc9cbf1b30017eb5559.mockapi.io/category')
      .then(res => {
        const categoriesArray = []
        for (let key in res.data) {
          categoriesArray.push( {...res.data[key]} )
        }
        commit('setCategories', categoriesArray)
      })
      .catch(e => console.log(e))
  },
  setBrands ({commit}) {
    return axios.get('https://611a2bc9cbf1b30017eb5559.mockapi.io/brand')
      .then(res => {
        const brandsArray = []
        for (let key in res.data) {
          brandsArray.push( {...res.data[key]} )
        }
        commit('setBrands', brandsArray)
      })
      .catch(e => console.log(e))
  },
  hidePreloader ({commit}) {
    commit('hidePreloader')
  },
  setMaxPrice ({commit, getters}) {
    let products = getters.getProducts
    let productWithMaxPrice = _.maxBy(products, function(item) {
      return item.price
    })
    let maxPrice = productWithMaxPrice.price
    commit('setMaxPrice', maxPrice)
  },
  changeGrid ({commit}, status) {
    commit('changeGrid', status)
  },
  changeFilterStatus ({commit}) {
    commit('changeFilterStatus')
  },
  clearFilter ({commit}) {
    commit('clearFilter')
  },
  clearRating ({commit}) {
    commit('clearRating')
  }
}

export const getters = {
  getPreloader (state) {
    return state.preloader
  },
  getProducts (state) {
    return state.products
  },
  getSearchValue (state) {
    return state.searchValue
  },
  getCategories (state) {
    return state.categories
  },
  getCategoriesActive (state) {
    return state.categoriesActive
  },
  getBrands (state) {
    return state.brands
  },
  getBrandsActive (state) {
    return state.brandsActive
  },
  getPriceRange (state) {
    return state.priceRange
  },
  getPriceRangeActive (state) {
    return state.priceRangeActive
  },
  getPriceSlider (state) {
    return state.priceSlider
  },
  getPriceSliderOptions (state) {
    return state.priceSliderOptions
  },
  getRatingRangeActive (state) {
    return state.ratingRangeActive
  },
  getSortBy (state) {
    return state.sortBy
  },
  getGrid (state) {
    return state.grid
  },
  getFilterStatus (state) {
    return state.filterStatus
  }
}
