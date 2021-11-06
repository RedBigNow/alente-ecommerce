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
  mounted() {
    window.addEventListener('load', this.onResize)
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth > 780) {
        this.pageSize = 9
      } else {
        this.pageSize = 8
      }
    },
    pageChangeHandler(page) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.$router.push(`${this.$nuxt.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  }
}
