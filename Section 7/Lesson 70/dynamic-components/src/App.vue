<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <KeepAlive>
    <component :is="componentName"></component>
  </KeepAlive>
  
</template>
<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: "App",
  components: {
    Home, About 
  },
  data() {
    return {
      componentName: "Home"
    }
  }
}
</script>