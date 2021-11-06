<template>
  <span class="search-results">{{result}} results found</span>
</template>

<script>
export default {
  props: {
    result: {
      type: Number,
      required: true
    }
  }
}
</script>
