const state = {
  playStatus: false, // 音乐播放状态 - [ true正在播放/false停止播放 ]
  nowPlayRate: '0%', // 当前歌曲播放进度
  nowPlayIndex: 0, // 当前播放歌曲在播放列表的位置
  nowPlayList: [
    {id: '11', name: 'test1'},
    {id: '12', name: 'test2'},
    {id: '13', name: 'test3'},
    {id: '14', name: 'test4'},
    {id: '15', name: 'test5'},
    {id: '16', name: 'test6'},
    {id: '17', name: 'test7'},
    {id: '18', name: 'test1'},
    {id: '19', name: 'test2'},
    {id: '20', name: 'test3'},
    {id: '21', name: 'test4'},
    {id: '22', name: 'test5'},
    {id: '23', name: 'test6'},
    {id: '24', name: 'test7'}
  ], // 当前播放歌曲列表
  showLyric: false // 是否展示歌词
}

const mutations = {
  /**
   * 展示 / 关闭 音乐播放
   */
  CHANGE_PLAY_STATUS (state, playStatus) {
    if (typeof playStatus !== 'undefined') {
      state.playStatus = playStatus
      return
    }
    state.playStatus = !state.playStatus
  },

  /**
   * 修改当前歌曲播放进度
   */
  CHANGE_NOW_PLAY_RATE (state, nowPlayRate) {
    state.nowPlayRate = nowPlayRate
  },

  /**
   *
   */
  SET_NOW_PLAY_INDEX (state, nowIndex = -1) {
    state.nowPlayIndex = nowIndex
  },

  /**
   * 修改当前播放歌曲在播放列表的位置
   */
  CHANGE_NOW_PLAY_INDEX (state, option = {nowIndexNum: -1, prevOrNext: 'next'}) {
    if (option.nowIndexNum === -1) {
      if ((option.prevOrNext === 'next') && ((state.nowPlayIndex + 1) === state.nowPlayList.length)) {
        state.nowPlayIndex = 0
      } else if ((option.prevOrNext === 'prev') && ((state.nowPlayIndex - 1) === -1)) {
        state.nowPlayIndex = state.nowPlayList.length - 1
      } else if ((option.prevOrNext === 'next') && ((state.nowPlayIndex + 1) < state.nowPlayList.length)) {
        state.nowPlayIndex++
      } else {
        state.nowPlayIndex--
      }
    } else {
      state.nowPlayIndex = option.nowIndexNum
    }
    state.playStatus = true
  },

  /**
   * 展示 / 关闭 展示歌词
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
