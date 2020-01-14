<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Dynamic></Dynamic>
    <Greeting></Greeting>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Dynamic from './components/Dynamic.vue'
import Greeting from './components/Greeting.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Dynamic,
    Greeting,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
