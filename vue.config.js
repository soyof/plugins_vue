const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': '@/assets',
        '@components': '@/components',
        '@views': '@/views'
      }
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: 'node_modules/mavon-editor/dist/highlightjs',
        to: path.resolve(__dirname, 'dist/highlightjs') // 插件将会把文件导出于/dist/highlightjs之下
      }, {
        from: 'node_modules/mavon-editor/dist/markdown',
        to: path.resolve(__dirname, 'dist/markdown') // 插件将会把文件导出于/dist/markdown之下
      }, {
        from: 'node_modules/mavon-editor/dist/katex', // 插件将会把文件导出
        to: path.resolve(__dirname, 'dist/katex')
      }])
    ]
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/styles/variables.scss'

          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
