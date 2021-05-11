<template>
  <v-app>
    <AppHeader v-if="$route.name !== 'Login'"></AppHeader>
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter v-if="$route.name !== 'Login'"></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from './components/header.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
 components: {
    AppHeader,
    AppFooter
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
  margin-top: 50px;
}
</style>