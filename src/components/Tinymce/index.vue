<template>
  <div class="editor-box tinymce">
    <textarea :id="id"></textarea>
    <upload-image :config="config" @upload="handleUploadImg" />
  </div>
</template>
<script>
import UploadImage from '@components/UploadImage'
import tinymce from 'tinymce'
import './plugins'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver'
import { defaultInit } from './init'

export default {
  name: 'Tinymce',
  components: {
    UploadImage
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    init: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      id: `editor_${new Date().getTime()}_${Math.random().toString(36).substr(2)}`,
      hasInit: false,
      hasChange: false,
      config: {
        show: false
      },
      content: '',
      isShow: false
    }
  },
  watch: { // 实现双向绑定
    value(newVal) {
      this.value = newVal
      if (!this.hasChange && this.hasInit) {
        tinymce.activeEditor.setContent(newVal)
      }
    }
  },
  created() {
    this.isShow = true
  },
  mounted() {
    const defaultStyle = defaultInit(this).content_style || ''
    const initStyle = this.init.content_style || ''
    const contentStyle = defaultStyle + initStyle
    const defaultSetup = defaultInit(this).setup
    const initSetup = this.init.setup
    tinymce.init({
      selector: `#${this.id}`,
      ...defaultInit(this),
      ...this.init,
      content_style: contentStyle,
      setup: (editor) => {
        defaultSetup && defaultSetup(editor)
        initSetup && initSetup(editor)
      }
    })
  },
  beforeDestroy() {
    tinymce.activeEditor && tinymce.activeEditor.destroy()
  },
  methods: {
    handleUploadImg(url) {
      this.config.show = false
      tinymce.execCommand('mceInsertContent', false, `<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589779358105&di=4e6494f792244c63ec46dd8ca08739c0&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533137122-vOrfsEHhpK.jpeg'>`)
    },
    /**
     * @params {Object}   blobInfo 上传的文件 包含base64 blob等
     * @params {callback} success 成功的回调
     * @params {callback} failure 失败的回调
     */
    uploadImage(blobInfo, success, failure) {
      // 发送请求, 获取图片路径后, 将路径传给success
      success('http://pic.sc.chinaz.com/files/pic/pic9/202005/apic25209.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .editor-box {
    font-size: 12px;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
