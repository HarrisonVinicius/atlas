function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setLayoutType: basicActionFactory('SET_LAYOUT'),
  setPerfilData: basicActionFactory('SET_PERFIL_DATA'),
  setUserNameSearched: basicActionFactory('SET_USER_NAME_SEARCHED'),

  async getUsersList({ commit }, payload) {
    const res = await this.$api.$get(
      '/search/users?q=' +
        payload.userName +
        '+in:user&page=' +
        payload.page +
        '&per_page=20'
    )
    commit('SET_USERS_LIST', res.items)
  },

  async getUserData({ commit }, payload) {
    const res = await this.$api.$get(`/users/${payload}`)
    commit('SET_USER_DATA', res)
  },

  async getUserRepos({ commit }, payload) {
    const res = await this.$api.$get(`/users/${payload}/repos`)
    commit('SET_USER_REPOS', res)
  },
}
