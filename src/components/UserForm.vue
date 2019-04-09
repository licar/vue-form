<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>Имя:</label>
        <input id="name" class="form-control" v-model="name"  type="text">
      </div>
      <div class="form-group">
        <label>Вид занятости:</label>
        <select id="employment_type" class="form-control" v-model="employment_type">
          <option v-for="option in options" v-bind:value="option.id">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
          <label>Пол:</label>
          <label class="radio-inline"><input type="radio" v-bind:value="0" v-model="sex">М</label>
          <label class="radio-inline"><input type="radio" v-bind:value="1" v-model="sex">Ж</label>
      </div>
      <div class="form-group">
        <label>Хобби: </label>
        <textarea class="form-control" v-model="hobbies">
        </textarea>
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="married"> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      employment_type: 0,
      sex: 0,
      hobbies: '',
      married: false,
      options:[
        {text : 'Учусь', id : 0},
        {text : 'Работаю', id : 1},
        {text : 'Пенсионер', id : 2}
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
