/* 全局自定义指令
 * @Author: holly
 * @Date: 2018-11-20 16:26:48
 * @Last Modified by: holly
 * @Last Modified time: 2018-11-20 16:30:26
 */

// 表单限制
import * as inputValidate from './inputValidate'
// 水波纹
import waves from './waves/waves.js'

// 表单特殊处理
let input = {}
for (let key in inputValidate) {
  let newKey = inputValidate[key].name
  input[newKey] = inputValidate[key]
}
// 水波纹 指令: v-waves
const wave = {
  waves: waves
}

export default {
  ...input,
  ...wave
}
