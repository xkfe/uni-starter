import path from 'node:path'
import process from 'node:process'
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'
import { loadEnv } from 'vite'

// 获取环境变量的范例
const env = loadEnv(process.env.NODE_ENV!, path.resolve(process.cwd(), 'env'))
const { VITE_APP_TITLE } = env

export default defineUniPages({
  pages: [],
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: VITE_APP_TITLE,
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
})
