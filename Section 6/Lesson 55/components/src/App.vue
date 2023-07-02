<template>
  <h3>Hey!</h3>
  <button type="button" @click="age++" >Update Age</button>
  <hr/>
  <greeting :age="age"></greeting>
  <user :age="age"></user>
</template>
<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components: {
     Greeting,
     User
  },
  data() {
    return {
      age: 20
    }
  }
}
</script>