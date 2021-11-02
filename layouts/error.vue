<template>
    <section class="not-found">
        <div class="container">
            <div class="not-found__wrapper">
                <p class="title">Page not found</p>
                <nuxt-link to="/">Back to main page</nuxt-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.not-found__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
}
</style>