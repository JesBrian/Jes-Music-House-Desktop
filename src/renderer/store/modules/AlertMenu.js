const state = {
  menuType: ''
}

const mutations = {
  /**
   * 展示 / 关闭 操作提示框
   * @param state
   */
  SHOW_ALERT_MENU (state, type = '') {
    state.menuType = type
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
