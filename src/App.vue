<template>
  <div class="layout mb-4">
    <Layout />
  </div>
  <div class="p-4">
    <router-view />
  </div>
</template>

<script>
import Layout from '@/views/Layouts/Layout.vue';
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
