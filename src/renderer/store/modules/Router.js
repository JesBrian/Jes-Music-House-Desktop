const state = {
  nowIndex: 0,
  historyRecord: ['/']
}

const mutations = {
  /**
   * 添加浏览历史纪录
   * @param state
   * @param url
   * @constructor
   */
  PUSH_URL_HISTORY_RECORD (state, url = '/') {
    if (state.nowIndex === 28) {
      state.historyRecord.shift()
    } else {
      state.nowIndex++
    }
    state.historyRecord[state.nowIndex] = url
    if (state.nowIndex !== state.historyRecord.length - 1) {
      state.historyRecord.splice(state.nowIndex + 1, state.historyRecord.length - state.nowIndex)
    }
  },

  /**
   * 修改当前历史纪录定位
   * @param state
   * @param index
   * @constructor
   */
  CHANGE_NOW_INDEX (state, index) {
    if (index >= 0 && index <= state.historyRecord.length - 1) {
      state.nowIndex = index
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
