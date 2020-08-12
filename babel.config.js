module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
// const plugins = ['@vue/babel-plugin-transform-vue-jsx']
// // 生产环境移除console
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'production') {
//   plugins.push('transform-remove-console')
// }
// module.exports = {
//   plugins: plugins,
//   presets: [
//     [
//       '@vue/app', {
//         modules: false,
//         targets: {
//           browsers: ['> 1%', 'last 2 versions', 'not ie <= 8', 'Android >= 4', 'iOS >= 8']
//         },
//         useBuiltIns: 'entry'
//       }
//     ]
//   ]
// }
