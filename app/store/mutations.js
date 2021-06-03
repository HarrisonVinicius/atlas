const setFactory = (key) => (state, data) => {
  state[key] = data
}

export default {
  SET_LAYOUT: setFactory('layout'),
  SET_USERS_LIST: setFactory('usersList'),
  SET_PERFIL_DATA: setFactory('perfilData'),
  SET_USER_DATA: setFactory('userData'),
  SET_USER_REPOS: setFactory('userRepos'),
}
