const state = {
  modalType: ''
}

const mutations = {
  /**
   * 改变拟态框类型
   * @param state
   * @param type
   */
  CHANGE_MODAL_TYPE (state, type = '') {
    state.modalType = type
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
  }
}

export default {
  state,
  mutations,
  actions
}
