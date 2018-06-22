const state = {
  menuType: '',
  positionX: 0,
  positionY: 0
}

const mutations = {
  /**
   * 展示 / 关闭 右键菜单
   * @param state
   * @param conf
   */
  SHOW_ALERT_MENU (state, conf = null) {
    if (conf) {
      state.menuType = conf.type
      state.positionX = conf.position.x
      state.positionY = conf.position.y
    } else {
      state.menuType = ''
      state.positionX = 0
      state.positionY = 0
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
