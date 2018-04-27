const state = {
  tips: ''
}

const mutations = {
  /**
   * 展示 / 关闭 操作提示框
   * @param state
   */
  SHOW_TIPS (state, str = '') {
    state.tips = str
    if (str !== '') {
      clearTimeout(state.timer)
      state.timer = setTimeout(() => {
        state.tips = ''
      }, 3688)
    } else {
      clearTimeout(state.timer)
    }
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
