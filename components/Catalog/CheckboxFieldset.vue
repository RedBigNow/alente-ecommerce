<template>
  <fieldset class="filter-item">
    <span class="filter-item__title">{{ title }}</span>
    <div class="filter-item__checkbox" v-for="item in items" :key="item.id">
      <input class="checkbox-input" type="checkbox" :name="alias" :id="alias + '_' + item.id" :value="item.id">
      <label :for="alias + '_' + item.id">{{ item.name || item.title }} <sup>1920</sup></label>
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
