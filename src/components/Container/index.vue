<template>
  <div class="container">
    <tinymce-vue-h v-model="editVal" :init="tinymceInit" />
  </div>
</template>

<script>
import TinymceVueH from 'tinymce-vue-h'
export default {
  name: 'Container',
  components: {
    TinymceVueH
  },
  data() {
    return {
      editVal: '',
      tinymceInit: {
        theme: 'silver', // 必须参数, 否则富文本编辑器无法显示
        skin_url: '/tinymce/skins/ui/oxide', // 必须参数, 否则富文本编辑器无法显示
        language_url: '/tinymce/langs/zh_CN.js', // 如需中文,则引入
        language: 'zh_CN', // 如需中文,则引入
        content_css: `/tinymce/skins/content/default` // 必须参数
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  font-size: 32px;
  padding: 32px 24px;
  @include center();
}
</style>
