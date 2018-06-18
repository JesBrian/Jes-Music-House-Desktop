const state = {
  showMusicView: false, // 是否展示歌曲页面 - [ true/false ]
  playStatus: false, // 音乐播放状态 - [ true正在播放/false停止播放 ]

  playModel: 'loop', // 音乐播放模式 - [ loop列表循环/single-loop单曲循环/random随机播放 ]
  nowIndex: 0, // 当前播放歌曲在播放列表的位置
  playList: [], // 当前播放歌曲列表
  showLyric: false, // 是否展示歌词
  volumeStatus: true, // 是否开启音量开关
  volumeLevel: 0.68 // 音量大小
}

const mutations = {
  /**
   * 展示 / 关闭 音乐播放
   * @param state
   */
  CHANGE_PLAY_STATUS (state) {
    state.playStatus = !state.playStatus
  },

  CHANGE_VOLUME_STATUS (state, musicSource) {
    state.volumeStatus = !state.volumeStatus
    state.volumeStatus ? musicSource.volume = state.volumeLevel : musicSource.volume = 0
  },

  CHANGE_VOLUME_LEVEL (state, volume) {
    state.volumeLevel = volume / 138
  },

  CHANGE_PLAY_MODEL (state) {
    let type = ''
    if (state.playModel === 'loop') {
      type = 'single-loop'
    } else if (state.playModel === 'single-loop') {
      type = 'random'
    } else {
      type = 'loop'
    }
    state.playModel = type
  },

  /**
   * 展示 / 关闭 音乐详情页
   * @param state
   */
  CHANGE_SHOW_MUSIC_VIEW (state) {
    state.showMusicView = !state.showMusicView
  },

  /**
   * 关闭音乐详情页
   * @param state
   */
  CLOSE_MUSIC_VIEW (state) {
    state.showMusicView = false
  },

  /**
   * 展示 / 关闭 展示歌词
   * @param state
   */
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
