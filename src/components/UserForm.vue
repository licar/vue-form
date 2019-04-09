<template>
  <div class="container">
    <h2>Stacked form</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" v-model="name" id="name" type="text">
      </div>
      <div class="form-group">
        <select class="form-control" v-model="employment_type">
          <option v-for="option in options" v-bind:value="option.id">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
          <label class="radio-inline"><input type="radio" v-bind:value="0" v-model="sex">М</label>
          <label class="radio-inline"><input type="radio" v-bind:value="1" v-model="sex">Ж</label>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="hobbies">
        </textarea>
      </div>
      <div class="form-group form-check">
        <input class="form-check-input" type="checkbox" v-model="married">
      </div>
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
