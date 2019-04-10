<template>
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Род деятельности</th>
        <th scope="col">Пол</th>
        <th scope="col">Хобби</th>
        <th scope="col">Женат/замужем</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{user.name}}</td>
        <td>{{employmentType(user.employment_type)}}</td>
        <td>{{user.sex == 0 ? 'М' : 'Ж'}}</td>
        <td>{{user.hobbies}}</td>
        <td>{{user.married ? 'Да' : 'Нет'}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
import { async } from 'q';

export default {
  name: 'UsersList',
  data() {
    return {
      users : []
    }
  },
  methods: {
    async getUsers () {
      try{
        const result = await axios.get(`${process.env.VUE_APP_SERVER_URL}/api`);
        this.users = result.data;
      }catch(err){
        console.log(err);
      }
    },

    async interval(){
      await new Promise((res, req) => { setTimeout(res, 2000)});
      await this.getUsers();
      return this.interval();
    },

    employmentType(type){
      switch (type) {
      case 0:
        return 'Учится';
      case 1:
        return 'Работает';
      case 2:
        return 'Пенсионер';
      }
    }
  },

  async created () {
    await this.interval();
  }
}
</script>
