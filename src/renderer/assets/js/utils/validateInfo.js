/**
 * @param infoType    验证信息类型
 * @param info        要验证的信息
 * @return {boolean}  验证成功返回 true
 */
export let validateInfoByReg = function (infoType = '', info = '') {
  let reg = getRegByType(infoType)
  return reg.test(info)
}

/**
 * @param type
 * @return {RegExp}
 */
let getRegByType = function (type = '') {
  let reg = /^$/
  switch (type) {
    case 'phone':
      reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      break
    case 'passwd':
      reg = /^[a-zA-Z0-9]{4,}$/
      break
    case 'mail':
      reg = /^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}\.com$/
      break
    case 'identifyCode':
      reg = /^[0-9]{4}$/
      break
    default:
      break
  }
  return reg
}
