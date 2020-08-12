<template>
  <div class="editor-box">
    <t-editor v-model="value" :init="tEditorConfig" />
  </div>
</template>

<script>
import TEditor from '@/components/Tinymce'
import { init } from './init'
import './plugins'
export default {
  components: {
    TEditor
  },
  data() {
    return {
      value: '',
      tEditorConfig: {}
    }
  },
  created() {
    this.tEditorConfig = init(this)
  }
}
</script>

<style lang="scss" scoped>
.editor-box {
  height: 100vh;
}
</style>
