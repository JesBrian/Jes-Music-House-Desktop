const state = {
  showMusicView: false, // 是否展示歌曲页面 - [ true/false ]
  playStatus: false, // 音乐播放状态 - [ true正在播放/false停止播放 ]
  nowIndex: 0, // 当前播放歌曲在播放列表的位置
  playList: [], // 当前播放歌曲列表
  showLyric: false // 是否展示歌词
}

const mutations = {
  CHANGE_PLAY_STATUS (state) {
    state.playStatus = !state.playStatus
  },

  CHANGE_SHOW_MUSIC_VIEW (state) {
    state.showMusicView = !state.showMusicView
  },
  CLOSE_MUSIC_VIEW (state) {
    state.showMusicView = false
  },

  CHANGE_SHOW_LYRIC (state) {
    state.showLyric = !state.showLyric
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
