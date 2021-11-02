<template>
    <div class="wrapper">
        <Header />
        <nuxt />
    </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
export default {
    name: "default",
    components: { Header }
}
</script>