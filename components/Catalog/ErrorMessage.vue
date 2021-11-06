<template>
  <div class="error-message">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
