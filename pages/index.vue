<template>
  <div id="todo">
    <h1>Todo</h1>
    <TodoList :todos="todos" v-on:check="done"/>
    <p>
      新しいTodoの追加:
      <input
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >
    </p>
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

const getUUID = () => {
  const R = (length) => {
    let uid = ''
    for (let i = 0; i < length; i++) {
      uid += Math.floor(Math.random() * 16).toString(16)
    }
    return uid
  }
  return `${R(8)}-${R(4)}-4${R(3)}-${R(4)}-${R(12)}`
}

export default {
  components: {
    TodoList
  },
  data () {
    return {
      newTodo: '',
      todos: [
        { id: getUUID(), text: '緑茶を買う', done: false},
        { id: getUUID(), text: 'Elasticsearchを勉強する', done: false},
        { id: getUUID(), text: '洗濯機を買う', done: false},
        { id: getUUID(), text: '結婚式に行ってくる', done: true}
      ]
    }
  },
  methods: {
    done (id, checked) {
      this.todos.find(
        (todo) => todo.id === id
      ).done = checked
    },
    addTodo () {
      this.todos.push({
        id: getUUID(),
        text: this.newTodo,
        done: false
      })
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