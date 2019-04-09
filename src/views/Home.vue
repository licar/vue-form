<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'home',
  components: {
    UserForm
  }
}
</script>
