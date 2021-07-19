export default {
  getToken(state) {
    return state.token
  },
  hasToken(state) {
    if (localStorage.getItem('token')) {
      state.token = localStorage.getItem('token');
    }
    return !!state.token
  }
}
