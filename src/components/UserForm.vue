<template>
  <div class="container">
    <form @submit="checkForm">
      <div class="form-group">
        <label>Имя:</label>
        <input id="name" class="form-control" v-model="form.name"  type="text">
      </div>
      <div class="form-group">
        <label>Вид занятости:</label>
        <select id="employment_type" class="form-control" v-model="form.employment_type">
          <option v-for="option in options" v-bind:value="option.id">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
          <label>Пол:</label>
          <label class="radio-inline"><input type="radio" v-bind:value="0" v-model="form.sex">М</label>
          <label class="radio-inline"><input type="radio" v-bind:value="1" v-model="form.sex">Ж</label>
      </div>
      <div class="form-group">
        <label>Хобби: </label>
        <textarea class="form-control" v-model="form.hobbies">
        </textarea>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="form.married"> Женат/замужем
        </label>
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
      form:{
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
      await this.sendForm();
      this.errors = [];
      
      if (this.form.name.length <= 0) {
        this.errors.push('Требуется указать имя');
      }

      if (this.form.hobbies.length <= 0) {
        this.errors.push('Поле хобби должно быть заполненно');
      }

      if (!this.errors){
        return true;
      }

      e.preventDefault();
    },
    
    async sendForm () {
      try{
        const { result } = await axios.post(`${process.env.VUE_APP_SERVER_URL}/api`, this.form);
      }catch(err){
        console.log(err);
      }
    }
  }
}
</script>
