<template>
  <div class="editor-box tinymce">
    <textarea :id="id"></textarea>
    <upload-image :config="config" @upload="handleUploadImg" />
  </div>
</template>
<script>
import UploadImage from '@components/UploadImage'
import tinymce from 'tinymce/tinymce'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver'
import './plugins'
import { init } from './init'

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
    isEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      id: `editor_${new Date().getTime()}`,
      hasInit: false,
      hasChange: false,
      config: {
        show: false
      },
      content: '',
      isShow: false
    }
  },
  watch: {
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
    tinymce.init({
      selector: `#${this.id}`,
      ...init(this)
    })
  },
  beforeDestroy() {
    tinymce.activeEditor && tinymce.activeEditor.destroy()
    // document.querySelectorAll('textarea')[0] && document.querySelectorAll('textarea')[0].remove()
  },
  methods: {
    handleUploadImg(url) {
      // const src = '' // 图片存储地址
      this.config.show = false
      // 将上传后的图片插入
      tinymce.execCommand('mceInsertContent', false, `<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589779358105&di=4e6494f792244c63ec46dd8ca08739c0&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533137122-vOrfsEHhpK.jpeg'>`)
    },
    uploadImage(blobInfo, success, failure) {
      success('http://pic.sc.chinaz.com/files/pic/pic9/202005/apic25209.jpg')
    },
    fileUpload(cb, value, type) {
      if (type.filetype === 'file') {
        cb('mypage.html', { text: 'My text' })
      }
      // Provide image and alt text for the image dialog
      if (type.filetype === 'image') {
        cb('myimage.jpg', { alt: 'My alt text' })
      }
      // Provide alternative source and posted for the media dialog
      if (type.filetype === 'media') {
        cb('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .editor-box {
    font-size: 12px;
    position: relative;
    width: 100%;
    height: calc(100vh);
  }
</style>
