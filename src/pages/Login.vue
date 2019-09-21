<template>
  <div>
    <label for="login">Login</label>
    <input id="login" type="text" v-model="login">
    
    <label for="password">Password</label>
    <input id="password" type="text" v-model="password">
    
    <button @click="handleLogin">Submit</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'Login',
    data: () => ({
      login: '',
      password: ''
    }),
    methods: {
      ...mapActions({
        loginUser: 'login'
      }),
      handleLogin() {
        this.loginUser({
          login: this.login,
          password: this.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
