const state = {
  playStatus: false
}

const mutations = {
  CHANGE_PLAY_STATUS (state) {
    state.playStatus = !state.playStatus
  }
}

const actions = {
  // someAsyncTask ({ commit }) {
  // do something async
  // }
}

export default {
  state,
  mutations,
  actions
}
