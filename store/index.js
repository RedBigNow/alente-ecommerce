import axios from 'axios'

export const state = () => ({
  products: [],
  categories: [],
  brands: [],
  priceRange: [
    {
      id: '1',
      text: '$10',
      minValue: '0',
      maxValue: '10',
      checked: false
    },
    {
      id: '2',
      text: '$10-$100',
      minValue: '10',
      maxValue: '100',
      checked: false
    },
    {
      id: '3',
      text: '$100-$500',
      minValue: '100',
      maxValue: '500',
      checked: false
    },
    {
      id: '4',
      text: '$500',
      minValue: '500',
      maxValue: '999999999999',
      checked: false
    },
    {
      id: '5',
      text: 'All',
      minValue: '0',
      maxValue: '999999999999',
      checked: true
    }
  ],
  grid: true
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  setBrands (state, brands) {
    state.brands = brands
  },
  changeGrid (state, status) {
    state.grid = status
  }
}

export const actions = {
  nuxtServerInit ({commit}, context) {
    return axios.get('https://611a2bc9cbf1b30017eb5559.mockapi.io/product')
      .then(res => {
        const productsArray = []
        for (let key in res.data) {
          productsArray.push( {...res.data[key]} )
        }
        commit('setProducts', productsArray)

      })
      .catch(e => console.log(e))
  },
  setCategories ({commit}, context) {
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
  setBrands ({commit}, context) {
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
  changeGrid ({commit}, status) {
    commit('changeGrid', status)
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  },
  getCategories (state) {
    return state.categories
  },
  getBrands (state) {
    return state.brands
  },
  getPriceRange (state) {
    return state.priceRange
  },
  getGrid (state) {
    return state.grid
  }
}
