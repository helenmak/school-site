<template>
  <button class="app-menu" @click="redirectToLogin">
    Log in
  </button>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    redirectToLogin() {
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="stylus" scoped>
  .app-menu {
    height: 44px;
    min-width: 44px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
</style>
