import { plugins, toolbar, quickbarsSelection, quickbarsInsert, tinymceTemplates, tinymceContextmenu } from './setting'

export const init = (_this) => {
  return {
    width: '100%',
    height: '100%',
    contextmenu: tinymceContextmenu, // 上下文菜单
    theme: 'silver',
    icons: 'custom',
    icons_url: '/tinymce/icons/icons.js',
    toolbar_sticky: true,
    toolbar_mode: 'sliding', // sliding生效条件toolbar必须为字符串,不能为数组
    plugins: plugins,
    toolbar: toolbar,
    images_upload_handler: _this.uploadImage,
    paste_data_images: true, // 允许粘贴图像
    paste_as_text: true,
    image_advtab: true,
    templates: tinymceTemplates,
    visual: false, // 颜色辅助
    // 快速工具栏
    quickbars_selection_toolbar: quickbarsSelection,
    quickbars_insert_toolbar: quickbarsInsert,
    setup: (editor) => {
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
        tooltip: '获取内容',
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
