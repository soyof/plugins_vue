export default {
  toolbars: {
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    quote: true, // 引用
    ol: true, // 有序列表
    ul: true, // 无序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    code: true, // code
    table: true, // 表格
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    htmlcode: true, // 展示html源码
    help: true, // 帮助
    /* 1.3.5 */
    undo: true, // 上一步
    redo: true, // 下一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    /* 1.4.2 */
    navigation: true, // 导航目录
    /* 2.1.8 */
    alignleft: true, // 左对齐
    aligncenter: true, // 居中
    alignright: true, // 右对齐
    /* 2.2.1 */
    subfield: true, // 单双栏模式
    preview: true // 预览
  },
  externalLink: {
    markdown_css: () => {
      // 这是你的markdown css文件路径
      return '/markdown/github-markdown.min.css'
    },
    hljs_js: () => {
      // 这是你的hljs文件路径
      return '/highlightjs/highlight.min.js'
    },
    hljs_css: (css) => {
      // 这是你的代码高亮配色文件路径
      return '/highlightjs/styles/' + css + '.min.css'
    },
    hljs_lang: (lang) => {
      console.log(lang)
      // 这是你的代码高亮语言解析路径
      return '/highlightjs/languages/' + lang + '.min.js'
    },
    katex_css: () => {
      // 这是你的katex配色方案路径路径
      return '/katex/katex.min.css'
    },
    katex_js: () => {
      // 这是你的katex.js路径
      return '/katex/katex.min.js'
    }
  }
}
