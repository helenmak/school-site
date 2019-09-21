<template>
  <div id="app">
    <app-menu />
    <router-view />
  </div>
</template>

<script>
  import AppMenu from 'src/components/AppMenu'
  
  export default {
    name: 'App',
    components: { AppMenu },
    methods: {
    }
  };
</script>

<style lang="stylus">
  html, body {
    margin: 0;
    padding: 0;
    overflow: auto;
    position: relative;
    min-height: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
  
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: linear-gradient(0.92turn, #f5b6a0, #2b1f9a);
    height: 100%;
  }
</style>
