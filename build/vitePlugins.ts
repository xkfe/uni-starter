/*
 * @Author: xkfe xkfe0516@gmail.com
 * @Date: 2024-06-28 17:12:18
 * @LastEditors: xkfe xkfe0516@gmail.com
 * @LastEditTime: 2024-06-30 16:50:22
 * @Description: vite plugin list
 */

import type { PluginOption } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { uniuseAutoImports } from '@uni-helper/uni-use'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniComponents from '@uni-helper/vite-plugin-uni-components'
import UniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
// UI
import { NutResolver } from 'nutui-uniapp'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
/**
 * @description: Vite plugin list
 * @param {*} PluginOption
 * @return {*}
 */
export function vitePlugins(): (PluginOption | PluginOption[])[] {
  return [
    // 基于文件的路由插件(docs: https://uni-helper.js.org/vite-plugin-uni-pages)
    UniPages({
      dts: './typings/uni-pages.d.ts',
    }),
    // 为 manifest.json 提供ts类型支持
    UniManifest(),
    UniLayouts(),
    UniComponents({
      dts: './typings/components.d.ts',
      resolvers: [NutResolver(), WotResolver()],
    }),
    uni(),
    UnoCSS(),
    UniMiddleware(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
        // 针对小程序提供的use(docs: https://github.com/uni-helper/uni-use/blob/main/src/readme.md)
        uniuseAutoImports(),
      ],
      dts: './typings/auto-imports.d.ts',
    }),
    { // 自定义插件禁用vite:vue插件的devToolsEnabled，强制编译 vue 模板时 inline 为 true
      name: 'fix-vite-plugin-vue',
      configResolved(config) {
        const plugin = config.plugins.find(p => p.name === 'vite:vue')
        if (plugin && plugin.api && plugin.api.options) {
          plugin.api.options.devToolsEnabled = false
        }
      },
    },
  ]
}
