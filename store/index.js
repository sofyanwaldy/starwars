export const state = () => ({
  list: []
})

export const mutations = {
  UPDATE_LIST (state, content) {
    state.list = content
  }
}
