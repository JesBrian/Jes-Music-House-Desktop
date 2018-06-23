const state = {
  modalType: '',
  oauthType: ''
}

const mutations = {
  /**
   * 改变拟态框类型
   */
  CHANGE_MODAL_TYPE (state, type = '') {
    state.modalType = type
  },

  /**
   * 修改OAuth第三方登录类型
   */
  CHANGE_OAUTH_TYPE (state, type = '') {
    state.oauthType = type
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
