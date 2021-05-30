function basicActionFactory(action) {
  return ({ commit }, data) => {
    commit(action, data)
  }
}

export default {
  setLayoutType: basicActionFactory('SET_LAYOUT'),
}
