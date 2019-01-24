/* 手机机型和环境判断 start */
export function isWechat() {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) === 'micromessenger'
}
export function isAlipay() {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/AlipayClient/i) === 'alipayclient'
}
export function isAndroid() {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.indexOf('android') > -1
}
export function isiOS() {
  let ua = window.navigator.userAgent
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
/* 手机机型和环境判断 end */

/**
 * 格式化时间
 * @param {any} time 
 * 时间对象或字符串
 * @param {string} cFormat 
 * 自定义日期格式y|m|d|h|i|s|a对应年月日时分秒星期 
 * 例如'{m}/{d} {h}/{i}' 默认 '{y}-{m}-{d} {h}:{i}:{s}'  
 * @return {string} 
 * 格式化后的时间
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  // 时间对象 直接赋值
  if (typeof time === 'object') {
    date = time
  } else {
    // 10位时间戳也就是单位为s的时间戳 转13位 ms 
    if (('' + time).length === 10) time = parseInt(time) * 1000
    // 转时间对象
    date = new Date(time)
  }
  // 获取年月日时分秒星期
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    // 遍历格式 替换成具体的时间
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    // 补零
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}