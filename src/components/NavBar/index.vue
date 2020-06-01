<template>
  <div class="nav-bar">
    <div class="title">
      自定义侧导航
    </div>
    <div class="opera">
      <el-button size="mini" @click="handleEdit">编辑</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleEdit() {
      this.$router.push('/page/editor')
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 10px 32px;
    font-size: 18px;
    background-color: #292c39;
    .title {
      color: #fff;
      line-height: 30px;
    }
    .opera {}
  }
</style>
