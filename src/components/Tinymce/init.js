import { plugins, toolbar, tinymceFontSize, tinymceFont, tinymcePatterns } from './setting'

export const defaultInit = (_this) => {
  return {
    width: '100%',
    height: '100%',
    menubar: false, // 关闭菜单
    branding: false, // 关闭底部官网提示
    statusbar: true, // 显示状态栏
    readonly: false, // 只读
    resize: false, // 调节编辑器大小
    autosave_ask_before_unload: false, // 阻止有内容时浏览器阻塞行为
    autosave_interval: '3s',
    autosave_prefix: `editor_${_this.$route.path}`,
    autosave_retention: '300m',
    draggable_modal: true, // 模态框允许拖动
    placeholder: '开始编写吧',
    theme: 'silver',
    language_url: '/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    skin_url: '/tinymce/skins/ui/oxide',
    content_css: `/tinymce/skins/content/default`,
    content_style: 'body, p{font-size: 12px}', // 为内容区编辑css样式
    fontsize_formats: tinymceFontSize, // 字体大小配置
    font_formats: tinymceFont,
    plugins: plugins,
    toolbar: toolbar,
    visual: false,
    textpattern_patterns: tinymcePatterns,
    init_instance_callback: editor => {
      if (_this.value) {
        editor.setContent(_this.value)
      }
      _this.hasInit = true
      editor.on('Input undo redo Change execCommand SetContent', (e) => {
        _this.hasChange = true
        // editor.getContent({ format: ''text }) // 获取纯文本
        _this.$emit('change', editor.getContent())
      })
    },
    setup: (editor) => {
      editor.on('keydown', (e) => {
        if (e.keyCode === 9) {
          if (e.shiftKey) {
            editor.execCommand('Outdent')
          } else {
            editor.execCommand('Indent')
          }
          e.preventDefault()
          e.stopPropagation()
        }
      })
    }
  }
}
