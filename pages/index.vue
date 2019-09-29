<template>
  <div>
    <table>
      <caption>好きなものリスト</caption>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>likes</th>
        </tr>
      </thead>
      <tbody v-for="user in users" v-bind:key="user.id">
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <ul>
              <li v-for="(item, index) in user.like" v-bind:key="index">
                {{ item }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
table {
  width: 100%;
}

tbody:nth-child(odd) {
  background: #eee;
}

ul {
  padding: 0;
  margin: 5px 0;
}

li {
  display: inline;
  margin: 0 5px;
  padding: 5px;
  background-color: #ccc;
  border-radius: 20px;
}
</style>


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