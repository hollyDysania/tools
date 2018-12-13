/**
 * 原生js获取dom兼容写法
 */
const dom = {
  /* 元素相对文档偏移 */
  getOffset (el) {
    const box = el.getBoundingClientRect()

    return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
    }
  },
  /* scrollTop 兼容写法 start*/
  getScrollTop () {
    const scrollTop =(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

    return scrollTop
  },
  /* document Height */
  getDocumentHeight () {
    const body = document.body

    const html = document.documentElement

    const height = Math.max(
      body.offsetHeight,
      body.scrollHeight,
      html.clientHeight,
      html.offsetHeight,
      html.scrollHeight
    )

    return height
  },
  /* 相对父元素的偏移 */
  getOffsetParent (el) {
    const box = el.getBoundingClientRect()

    return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
    }
  },
  /* 可视区宽高 */
  getClient() {
    const client = {}

    client.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    client.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    return client
  }
}

export default dom
