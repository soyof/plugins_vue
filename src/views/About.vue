<template>
  <div>
    <tinymce v-if="false" />
    <mark-down-editor />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import MarkDownEditor from '@/components/MarkdownEditor'
export default {
  name: 'About',
  components: {
    Tinymce,
    MarkDownEditor
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
</style>
