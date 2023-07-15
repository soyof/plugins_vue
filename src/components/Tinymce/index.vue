<template>
  <div class="editor-box tinymce">
    <textarea :id="id"></textarea>
  </div>
</template>
<script>
import tinymce from 'tinymce'
import './plugins'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver'
import { defaultInit } from './init'

export default {
  name: 'Tinymce',
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
  }
}
</script>

<style lang="less" scoped>
  .editor-box {
    font-size: 12px;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
