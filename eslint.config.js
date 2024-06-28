// ?A: uni-app 暂不支持使用 "type": "module"
const uni = require('@uni-helper/eslint-config')

module.exports = uni({
  // 启用 stylistic 格式化规则
  stylistic: true,
  unocss: true,
  ignores: [],
  rules: {
    'no-console': 'off',
  },
})
