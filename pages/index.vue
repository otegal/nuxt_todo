<template>
  <div id="todo">
    <h1>Todo</h1>
    <TodoList :todos="todos"/>
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
  data() {
    return {
      todos: [
        { id: getUUID(), text: '緑茶を買う', done: false},
        { id: getUUID(), text: 'Elasticsearchを勉強する', done: false},
        { id: getUUID(), text: '洗濯機を買う', done: false},
        { id: getUUID(), text: '結婚式に行ってくる', done: true}
      ]
    }
  },
  mounted() {
    console.log(this.todos)
  }
}
</script>

<style scoped>
#todo {
  background-color: #aea;
}
</style>