<template>
  <div class="container">
    <form @submit="checkForm">
      <div class="form-group">
        <label>Имя:</label>
        <input id="name" class="form-control" v-model="user.name"  type="text">
      </div>
      <div class="form-group">
        <label>Род деятельности:</label>
        <select id="employment_type" class="form-control" v-model="user.employment_type">
          <option v-for="option in options" v-bind:value="option.id">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
          <label>Пол:</label>
          <label class="radio-inline"><input type="radio" v-bind:value="0" v-model="user.sex">М</label>
          <label class="radio-inline"><input type="radio" v-bind:value="1" v-model="user.sex">Ж</label>
      </div>
      <div class="form-group">
        <label>Хобби: </label>
        <textarea class="form-control" v-model="user.hobbies">
        </textarea>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="user.married"> Женат/замужем
        </label>
      </div>
      <div  v-if="errors.length > 0" class="alert alert-danger">
        <strong>Danger!</strong> {{this.errors[0]}} 
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserForm',
  data() {
    return {
      user:{
        name: '',
        employment_type: 0,
        sex: 0,
        hobbies: '',
        married: false,
      },
      errors: [],
      options:[
        {text : 'Учусь', id : 0},
        {text : 'Работаю', id : 1},
        {text : 'Пенсионер', id : 2}
      ]
    }
  },
  methods: {
    async checkForm(e) {
      this.errors = [];
      
      if (this.user.name.length <= 0) {
        this.errors.push('Требуется указать имя');
      }

      if (this.user.hobbies.length <= 0) {
        this.errors.push('Поле хобби должно быть заполненно');
      }

      if (!this.errors.length){
        await this.addUser();
        return true;
      }

      e.preventDefault();
    },
    
    async addUser () {
      try{
        const result = await axios.post(`${process.env.VUE_APP_SERVER_URL}/api`, this.user);
      }catch(err){
        console.log(err);
      }
    }
  }
}
</script>
