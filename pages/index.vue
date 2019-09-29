<template>
  <div>
    <h1>
      Hello, World!
    </h1>
    <ul>
      <li v-for="user in users" v-bind:key='user.id'>
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get('https://api.myjson.com/bins/yzzof')
    return {
      users: data
    }
  }
}
</script>