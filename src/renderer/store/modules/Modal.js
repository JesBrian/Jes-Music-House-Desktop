const state = {
  modalType: ''
}

const mutations = {
  /**
   * 改变拟态框类型
   * @param state
   */
  CHANGE_MODAL_TYPE (state, type = '') {
    state.modalType = type
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
