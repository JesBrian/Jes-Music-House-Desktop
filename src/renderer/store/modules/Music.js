const state = {
  playStatus: false,
  showMusicView: false
}

const mutations = {
  CHANGE_PLAY_STATUS (state) {
    state.playStatus = !state.playStatus
  },

  CHANGE_SHOW_MUSIC_VIEW (state) {
    state.showMusicView = !state.showMusicView
  },
  CLOSE_MUSIC_VIEW (state) {
    state.showMusicView = false
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
