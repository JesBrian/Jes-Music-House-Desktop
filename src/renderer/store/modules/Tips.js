const state = {
  tips: '',
  tipsType: 'info'
}

const mutations = {
  /**
   * 展示 / 关闭 操作提示框
   * @param state
   * @param tipsObj
   */
  SHOW_TIPS (state, tipsObj) {
    state.tips = tipsObj.msg
    state.tipsType = tipsObj.type
    if (tipsObj.msg !== '') {
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
