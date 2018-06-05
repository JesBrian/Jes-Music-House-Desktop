/**
 * @param infoType
 * @param info
 * @return {boolean}
 */
export function validateInfoByReg (infoType = '', info = '') {
  let reg = getRegByType(infoType)
  return reg.test(info)
}

/**
 * @param type
 * @return {RegExp}
 */
function getRegByType (type = '') {
  let reg = /^$/
  switch (type) {
    case 'phone':
      reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      break
    case 'passwd':
      reg = /^[a-zA-Z0-9]{4,}$/
      break
    case 'identifyingCode':
      reg = /^[0-9]{4}$/
      break
    default:
      break
  }
  return reg
}
