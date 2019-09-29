<template>
  <div id="todo">
    <h1>Todo</h1>
    <TodoList :todos="todos"/>
    <p>新しいTodoの追加: <input type="text" v-model="newTodo" @keyup.enter="addTodo"></p>
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

export default {
  async fetch ({ store }) {
    await store.dispatch('todos/add', { text: 'Manjaro linux' })
    await store.dispatch('todos/add', { text: 'Elm' })
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  components: {
    TodoList
  },
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    async addTodo () {
      await this.$store.dispatch('todos/add', { text: this.newTodo })
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
#todo {
  background-color: #aea;
}
</style>