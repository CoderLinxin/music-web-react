// 导入path模块
const path = require('path')
// 定义一个路径拼接函数
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {// 设置路径别名
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  }
}