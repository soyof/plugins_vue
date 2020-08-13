<template>
  <div class="nav-bar">
    <div class="title">
      自定义侧导航
    </div>
    <div class="user-info">
      <div class="user-avatar">X</div>
      <div class="name">Mr.X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
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
    .user-info {
      display: flex;
      align-items: center;
      .user-avatar {
        @include center();
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 15px;
      }
      .name {
        color: #fff;
      }
    }
  }
</style>
