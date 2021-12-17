<template>
  <div id="nav">
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'todos.index'}">Todos</router-link>
  </div>
  <router-view/>
</template>
