const state = {
  tips: ''
}

const mutations = {
  /**
   * 改变拟态框类型
   * @param state
   */
  SHOW_TIPS (state, str = '') {
    state.tips = str
    if (str !== '') {
      clearTimeout(state.timer)
      state.timer = setTimeout(() => {
        state.tips = ''
        console.log(666)
      }, 3688)
    } else {
      clearTimeout(state.timer)
    }
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
