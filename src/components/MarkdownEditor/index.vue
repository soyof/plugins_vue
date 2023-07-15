<template>
  <div class="markdown-box">
    <mavon-editor
      v-model="value"
      :ishljs="true"
      height="10%"
      :subfield="true"
      :toolbars="option.toolbars"
      :navigation="true"
      code_style="solarized-dark"
      :external-link="option.externalLink"
      @imgAdd="imgAdd"
      @imgDel="imgDel"
      @change="handleChange"
    />
  </div>
</template>

<script>
import defaultOption from './default-options'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'MarkdownEditor',
  components: {
    mavonEditor
  },
  props: {
    option: {
      type: Object,
      required: false,
      default() {
        return defaultOption
      }
    }
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
  },
  methods: {
    handleChange(value, html) {
      console.log(value)
      console.log(html)
      this.htmlText1 = html
    },
    imgAdd(pos, file) {
      console.log(pos)
      console.log(file)
    },
    imgDel(pos) {
      console.log(pos)
    }
  }
}
</script>

<style lang="less" scoped>
  .markdown-box {
    width: 100%;
    /*height: calc(100vh - 50px);*/
    .markdown-body {
      width: 100%;
      height: 100%;
      /*padding: 20px;*/
    }
  }
</style>
