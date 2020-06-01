<template>
  <div class="button-area">
    <el-button @click="handleChangeEditor('tm')">富文本编辑器</el-button>
    <el-button @click="handleChangeEditor('md')">markdown编辑器</el-button>
    <div class="container"></div>
    <tinymce v-if="showTm" />
    <markdown-editor v-if="showMd" />
  </div>
</template>

<script>
import Tinymce from '@components/Tinymce'
import MarkdownEditor from '@components/MarkdownEditor'
export default {
  name: 'Container',
  components: {
    Tinymce,
    MarkdownEditor
  },
  data() {
    return {
      showTm: false,
      showMd: false
    }
  },
  methods: {
    handleChangeEditor(v) {
      if (v === 'tm') {
        this.showTm = true
        this.showMd = false
      } else {
        this.showTm = false
        this.showMd = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-area {
  padding: 32px 24px;
  .tinymce {
    width: 800px;
    height: 500px;
  }
}
</style>
