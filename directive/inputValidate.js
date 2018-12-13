/**
 * @function {inputValidate}: 表单输入框限制
 * @param {name}: 指令名
 * @param {regExp}: 正则规则
 */
const inputValidate = function (name,regExp) {
  return {
    bind: function (el) {
      el.handler = function (e) {
        let input = null
        if (el.tagName === 'INPUT') {
          input = el
        } else {
          input = el.getElementsByTagName('input')[0] || el.getElementsByTagName('textarea')[0]
        }
        input.value = input.value.replace(regExp, '')
      }
      // input事件
      el.addEventListener('input', el.handler, true)
      // 粘贴事件
      el.addEventListener('paste', el.handler, true)
    },
    unbind: function (el) {
      let input = el.tagName === 'INPUT' ?
        el :
        el.getElementsByTagName('input')[0]
      el.removeEventListener('input', el.handler, true)
      el.removeEventListener('paste', el.handler, true)
    },
    name
  }
}

/**
 * @function 表单元素限制输入类型(空格)
 * @directive: v-spaces-prohibit
 * @application: element组件Input
 * @BusinessScenarios 输入框
 */

export const ProhibitSpaces = inputValidate('spaces-prohibit', /\s/gi) // 禁止空格
/**
 * @function 表单元素限制输入类型(数字与字母)
 * @directive: v-number-letter-only
 * @application: element组件Input
 * @BusinessScenarios 密码
 */

export const numberLetterOnly = inputValidate('number-letter-only',/[^0-9a-zA-Z]+/gi) // 只允许数字或字母

/**
 * @function 表单元素限制输入类型(数字)
 * @directive: v-number-only
 * @application: element组件Input
 * @BusinessScenarios 数量
 */
export const NumberOnly = inputValidate('number-only',/[^0-9]+/gi) // 只允许数字

/**
 * @function 表单元素限制输入类型(数字|小数)
 * @directive: v-number-decimal-only
 * @application: element组件Input
 * @BusinessScenarios 价格
 */
export const NumberDecimalOnly = inputValidate('number-decimal-only',/[^0-9.]+/gi) // 只允许数字和点
/**
 * @function 表单元素限制输入类型(数字|字母|汉字)
 * @directive: v-number-letter-chinese-only
 * @application: iview组件Input
 * @BusinessScenarios 密码
 */
export const inputNumberLetterChineseOnly = inputValidate('number-letter-chinese-only', /[^A-Za-z0-9\u4e00-\u9fa5]+/gi)
