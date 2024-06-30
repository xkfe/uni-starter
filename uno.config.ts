/*
 * @Author: xkfe xkfe0516@gmail.com
 * @Date: 2024-06-28 18:30:48
 * @LastEditors: xkfe xkfe0516@gmail.com
 * @LastEditTime: 2024-06-30 13:01:39
 * @Description: 原子化样式配置
 */

import { defineConfig } from 'unocss'
// import { presetUni } from '@uni-helper/unocss-preset-uni'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { presetApplet, presetRemRpx, transformerAttributify } from 'unocss-applet'

export default defineConfig({
  // 快捷方式
  shortcuts: [
    { center: 'flex items-center justify-center' },
    { 'col-center': 'flex items-center' },
    { 'row-center': 'flex justify-center' },
  ],
  presets: [
    presetApplet(),
    presetRemRpx({ baseFontSize: 4 }),
  ],
  transformers: [
    // https://alfred-skyblue.github.io/unocss-docs-cn/transformers/directives
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ ignoreAttributes: ['block'] }),
  ],
})
