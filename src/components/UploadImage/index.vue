<template>
  <el-dialog
    title="插入图片"
    :visible.sync="config.show"
    :modal="true"
    width="30%"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    <span slot="footer" class="dialog-footer">
      <el-button @click="config.show = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'UploadImage',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    submit() {
      this.$emit('upload')
    }
  }
}
</script>

<style lang="less" scoped>
  .el-dialog {

  }
  .el-upload {
    width: 100%;
    .el-upload-dragger {
      width: 100%;
    }
  }
</style>
