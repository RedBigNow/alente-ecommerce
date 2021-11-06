<template>
  <div class="wrapper-content" :class="{ 'no-scroll' : getFilterStatus}">
    <div class="container">
      <div class="catalog-wrapper">
        <sidebar />
        <catalogContent />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Catalog/Sidebar.vue'
import catalogContent from '@/components/Catalog/CatalogContent.vue'

export default {
  components: {
    sidebar,
    catalogContent
  },
  computed: {
    getFilterStatus () {
      return this.$store.getters.getFilterStatus
    }
  },
  head () {
    let title = 'Alente e-commerce',
      descr = 'Тестовое задание от компании Alente',
      type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  }
}
</script>
