/* eslint-disable no-new */
function addPreZero(val) {
  if (val < 10) {
    return '0' + val
  }
  return val
}
// 全局过滤器
const filters = {
  // 秒数 转 时分秒
  countDownTime: val => {
    if (val < 0) {
      return ''
    }
    let mm = Math.floor((val / 60) % 60)

    let ss = Math.floor(val % 60)

    let hh = Math.floor((val / 60 / 60) % 24)

    hh = addPreZero(hh)
    mm = addPreZero(mm)
    ss = addPreZero(ss)
    let str = ''

    if (val > 1800) {
      str = hh + '时' + mm + '分' + ss + '秒'
    } else {
      str = mm + '分' + ss + '秒'
    }
    return str
  }
}

export default filters
