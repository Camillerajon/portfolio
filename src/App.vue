<template>
    <div id="app">
        <div class="grid" v-for="i in 9" :key="i"></div>

        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Camille Rajon Portfolio',
        metaInfo: {
        title: 'Portfolio Camille Rajon',
        htmlAttrs: {
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Découvrez mon portfolio de développeur web' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
        components: {
            
        }
    }
    }
</script>