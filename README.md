# Vue封装常用组件

## TinyMce使用

```shell
npm install tinymce -S
```

在node_modules中找到tinymce, 将skin目录拷贝到项目public目录下(此方法用于配置主题等)

> 初始化 `tinymce` 文本编辑器，确保 `selector` 唯一性
> 当 `selector` 选中同一个 `dom id` 时，`tinymce` 只 `init` 一次，
> 所以每次都动态改变 `selector` 所选中 `dom id` 即可

相关配置请参考`src/components/tinymce`目录

## 自定义侧导航

相关配置请参考`src/components/SideBar`, `src/components/NavBar`目录

```javascript
export const init = (_this) => {
  return {
    width: '100%',
    height: '100%',
    menubar: false, // 关闭菜单
    branding: false, // 关闭底部官网提示
    statusbar: true, // 显示状态栏
    readonly: false, // 只读
    resize: false, // 调节编辑器大小
    autosave_ask_before_unload: true, // 阻止有内容时浏览器阻塞行为
    contextmenu: tinymceContextmenu, // 上下文菜单
    draggable_modal: true, // 模态框允许拖动
    placeholder: '开始编写吧',
    theme: 'silver',
    icons: 'custom',
    icons_url: '/tinymce/icons/icons.js',
    language_url: '/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    skin_url: '/tinymce/skins/ui/oxide',
    content_css: `/tinymce/skins/content/default`,
    content_style: 'body, p{font-size: 12px}', // 为内容区编辑css样式
    fontsize_formats: tinymceFontSize, // 字体大小配置
    font_formats: tinymceFont,
    toolbar_sticky: true,
    toolbar_mode: 'sliding', // sliding生效条件toolbar必须为字符串,不能为数组
    plugins: plugins,
    toolbar: toolbar,
    images_upload_handler: _this.uploadImage,
    // 文件上传函数
    // file_picker_types: `file image media`,
    // media_live_embeds: true,
    // file_picker_callback: _this.fileUpload,
    paste_data_images: true, // 允许粘贴图像
    paste_as_text: true,
    templates: tinymceTemplates,
    visual: false, // 颜色辅助
    // 快速工具栏
    quickbars_selection_toolbar: quickbarsSelection,
    quickbars_insert_toolbar: quickbarsInsert,
    textpattern_patterns: tinymcePatterns, // 快捷键配置
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
      // 自定义上传组件
      editor.ui.registry.addButton('upload', {
        text: `<i class="el-icon-upload" style="font-size: 24px"></i>`,
        tooltip: '自定义上传',
        onAction: () => {
          _this.config.show = true
        }
      })
      editor.ui.registry.addButton('submit', {
        text: `<i class="el-icon-position" style="font-size: 18px"></i>`,
        tooltip: '发布',
        onAction: () => {
          console.log(editor.getContent())
        }
      })
      editor.ui.registry.addButton('empty', {
        text: `<i class="el-icon-close" style="font-size: 18px"></i>`,
        tooltip: '清空内容',
        onAction: () => {
          _this.content = ''
          editor.setContent('')
        }
      })
    }
  }
}

```

