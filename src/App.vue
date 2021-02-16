<template>
    <div id="app">
        <div class="grid" v-for="i in 9" :key="i"></div>

        <router-view />
    </div>
</template>

<script>
    export default {
        components: {
            
        }
    }
</script>