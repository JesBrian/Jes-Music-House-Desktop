
/**
 * 路由跳转函数
 * @param url   跳转到的URL
 * @param that  this 对象
 */
export function changePage (url = '', that = {}) {
  // 发布页面改变事件
  that.$root.eventHub.$emit('changeRouter')

  // 关闭歌曲详情页
  if (that.$store.state.Music.showMusicView) {
    that.$store.commit('CLOSE_MUSIC_VIEW')
  }

  // 判断要跳转的路由是否是当前页面
  if (url !== that.$store.state.Router.historyRecord[that.$store.state.Router.nowIndex]) {
    that.$router.push(url)
    that.$store.commit('PUSH_URL_HISTORY_RECORD', url)
  }
}

/**
 * 时间戳 转成 分钟:秒时间 [00:00]
 * @param timestamp   要转换的时间戳
 * @return {string}   转换后的时间字符串
 */
export function timeStampToMinuteSecondTime (timestamp) {
  let tempMin = Math.floor(timestamp / 60)
  tempMin = (tempMin < 10) ? '0' + tempMin : tempMin
  return tempMin + ':' + (timestamp % 60 / 100).toFixed(2).slice(-2)
}

/**
 * 获取鼠标坐标
 * @param event                      鼠标点击事件
 * @return {{x: number, y: number}}  X & Y 坐标
 */
export function mouseCoords (event) {
  if (event.pageX || event.pageY) {
    return {
      x: event.pageX,
      y: event.pageY
    }
  }
  return {
    x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y: event.clientY + document.body.scrollTop - document.body.clientTop
  }
}

/**
 * 获取元素的定位
 * @param element    要获取定位元素
 * @param direction  要获取的 X/Y 轴位置
 * @return {number}  返回 X/Y 定位
 */
export function getElemenPosion (element, direction) {
  let position = 0
  if (direction === 'top') {
    position = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
      position += current.offsetTop
      current = current.offsetParent
    }
  }
  if (direction === 'left') {
    position = element.offsetLeft
    let current = element.offsetParent
    while (current !== null) {
      position += current.offsetLeft
      current = current.offsetParent
    }
  }
  return position
}

/**
 * 获取元素滚动高度
 * @return {number}  返回元素滚动高度
 */
export function getScrollTop (element) {
  return element.scrollTop
}
