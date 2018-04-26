const state = {
  tips: '666'
}

const mutations = {
  /**
   * 改变拟态框类型
   * @param state
   */
  SHOW_TIPS (state, str = '') {
    state.tips = str
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
