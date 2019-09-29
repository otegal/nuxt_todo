<template>
  <div id="todoList">
    <h2>TodoList</h2>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}/done:{{ todo.done }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    todos: Array
  }
}
</script>

<style scoped>
#todoList {
  background-color: #aae
}
</style>