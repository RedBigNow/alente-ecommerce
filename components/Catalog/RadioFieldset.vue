<template>
  <fieldset class="filter-item">
    <span class="filter-item__title">{{ title }}</span>
    <div class="filter-item__radio" v-for="item in items" :key="item.id">
      <input class="radio-input" :name="alias" :id="alias + '_' + item.id" :value="item.text" type="radio" :checked="item.checked">
      <label :for="alias + '_' + item.id">{{ item.text }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    alias: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
