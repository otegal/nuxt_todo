export const state = () => ({
  list: []
})

export const getters = {
  getDoneList (state) {
    return state.list.filter((todo) => todo.done)
  },
  getNotDoneList (state) {
    return state.list.filter((todo) => !todo.done)
  }
}

export const mutations = {
  changeDoneState (state, payload) {
    state.list.find((todo) => todo.id === payload.id).done = payload.done
  },
  add (state, payload) {
    state.list.push({
      id: getUUID (),
      text: payload.text,
      done: false
    })
  },
  remove (state, payload) {
    state.list = state.list.filter((todo) => todo.id !== payload.id)
  },
  update (state, payload) {
    const index = state.list.findIndex((todo) => todo.id === payload.id)
    const id = state.list[index].id
    state.list[index] = {
      id: id,
      text: payload.text,
      done: payload.done
    }
  }
}

export const actions = {
  changeDoneState ({ commit }, payload) {
    commit('changeDoneState', payload)
  },
  add ({ commit }, payload) {
    commit('add', payload)
  },
  remove ({ commit }, payload) {
    commit('remove', payload)
  },
  update ({ commit }, payload) {
    commit('update', payload)
  }
}

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
