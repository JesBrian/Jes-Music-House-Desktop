const state = {
  showMusicView: false, // 是否展示歌曲页面 - [ true/false ]
  showBottomLyricView: false, // 是否展示底部歌词页面 - [ true/false ]
  showMiniView: false
}

const mutations = {
  /**
   * 展示 / 关闭 音乐详情页
   */
  CHANGE_SHOW_MUSIC_VIEW (state) {
    state.showMusicView = !state.showMusicView
  },

  /**
   * 关闭音乐详情页
   */
  CLOSE_MUSIC_VIEW (state) {
    state.showMusicView = false
  },

  /**
   * 展示 / 关闭 mini模式
   */
  CHANGE_SHOW_MINI_VIEW (state) {
    state.showMiniView = !state.showMiniView
  },

  /**
   * 关闭音乐mini模式
   */
  CLOSE_MINI_VIEW (state) {
    state.showMiniView = false
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
