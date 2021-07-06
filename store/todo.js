export const state = () => ({
  list: [],
})

export const mutations = {
  addTodo(state, { name, age }) {
    state.list.push({
      name,
      age,
    })
  },
}
