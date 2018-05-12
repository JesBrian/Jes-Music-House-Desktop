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
