const state = {
  id: '0', // 用户ID
  username: '', // 用户姓名
  avatar: '' // 用户头像
}

const mutations = {
  /**
   * Vuex 存储当前登录用户信息
   */
  SAVE_LOGIN_USER_INFO (state, userInfo) {
    state.id = userInfo.id
    state.username = userInfo.username
    state.avatar = userInfo.avatar
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
