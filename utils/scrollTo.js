Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2 // 等同于t = t / (d / 2)
  if (t < 1) {
    return c / 2 * t * t + b
  }
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

// 浏览器下次重绘之前调用回调
var requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) }
})()

function move(amount) {
  document.documentElement.scrollTop = amount
  document.body.parentNode.scrollTop = amount
  document.body.scrollTop = amount
}

function position() {
  return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop
}

/**
 * @function {滚动到某个位置} scrollTo
 * @param {要去的位置} to
 * @param {延时} duration
 * @param {回调} callback
 */
export function scrollTo(to, duration, callback) {
  // 获取文档距离顶部距离
  const start = position()
  // 要移动的距离
  const change = to - start
  // 相当于帧数
  const increment = 20
  let currentTime = 0
  duration = (typeof (duration) === 'undefined') ? 500 : duration
  var animateScroll = function() {
    currentTime += increment
    // 慢速开始和结束的过渡效果
    var val = Math.easeInOutQuad(currentTime, start, change, duration)
    // 移动文档
    move(val)
    // 动画还没结束
    if (currentTime < duration) {
      // 下次重绘前调用（递归）
      requestAnimFrame(animateScroll)
    } else {
      // 结束检测callback
      if (callback && typeof (callback) === 'function') {
        // 有就调用
        callback()
      }
    }
  }
  animateScroll()
}
