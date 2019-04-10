<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <div id="nav">
      <router-link to="/">List users</router-link> |
      <router-link to="/add">Add user</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
</style>
