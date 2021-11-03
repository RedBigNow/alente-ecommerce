import _ from 'lodash'

export default {
  data () {
    return {
      page: +this.$nuxt.$route.query.page || 1,
      pageSize: 9,
      pageCount: 0,
      allItems: [],
      items: []
    }
  },
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$nuxt.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  }
}
