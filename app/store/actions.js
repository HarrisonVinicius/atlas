function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setLayoutType: basicActionFactory('SET_LAYOUT'),
  setPerfilData: basicActionFactory('SET_PERFIL_DATA'),

  async getUsersList({ commit }, payload) {
    const res = await this.$api.$get(
      '/search/users?q=' + payload + '+in:user&per_page=10'
    )
    commit('SET_USERS_LIST', res.items)
  },

  async getUserData({ commit }, payload) {
    const res = await this.$api.$get(`/users/${payload}`)
    commit('SET_USER_DATA', res)
  },
}
