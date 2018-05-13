/**
 * 时间戳 转成 分钟:秒时间 [00:00]
 * @param timestamp
 * @return {string}
 */
export function timeStampToMinuteSecondTime (timestamp) {
  let tempMin = Math.floor(timestamp / 60)
  tempMin = (tempMin < 10) ? '0' + tempMin : tempMin
  return tempMin + ':' + (timestamp % 60 / 100).toFixed(2).slice(-2)
}

/**
 * 获取鼠标坐标
 * @param event
 * @return {{x: number, y: number}}
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
 * @param element
 * @param direction
 * @return {number}
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
