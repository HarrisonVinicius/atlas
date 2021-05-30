const setFactory = (key) => (state, data) => {
  state[key] = data
}

export default {
  SET_LAYOUT: setFactory('layout'),
}
