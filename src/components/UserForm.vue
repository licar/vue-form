<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="name" type="text">
    <select v-model="employment_type">
      <option v-for="option in options" v-bind:value="option.id">
        {{ option.text }}
      </option>
    </select>
    <div>
      <input type="radio" v-bind:value="0" v-model="sex">М
      <input type="radio" v-bind:value="1" v-model="sex">Ж
    </div>
    <textarea v-model="hobbies">
    </textarea>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: '',
      employment_type: 0,
      sex: 0,
      hobbies: '',
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
