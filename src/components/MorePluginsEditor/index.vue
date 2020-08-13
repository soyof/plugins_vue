<template>
  <div class="editor-box">
    <t-editor v-model="value" :init="tEditorConfig" />
    <upload-image :config="config" @upload="handleUploadImg" />
  </div>
</template>

<script>
import tinymce from 'tinymce'
import UploadImage from '@components/UploadImage'
import TEditor from '@/components/Tinymce'
import { init } from './init'
import './plugins'
export default {
  components: {
    TEditor,
    UploadImage
  },
  data() {
    return {
      value: '',
      tEditorConfig: {},
      config: {
        show: false
      }
    }
  },
  created() {
    this.tEditorConfig = init(this)
  },
  methods: {
    // 自定义上传组件
    handleUploadImg(url) {
      this.config.show = false
      tinymce.execCommand('mceInsertContent', false, `<img src='http://pic.sc.chinaz.com/files/pic/pic9/202005/apic25209.jpg'>`)
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
  height: 100vh;
}
</style>
