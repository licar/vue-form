<template>
  <div class="home">
    <UsersList/>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'List',
  components: {
    UsersList
  }
}
</script>
