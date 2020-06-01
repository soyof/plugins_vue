<template>
  <div class="slide-bar-box">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="help-menu">
        <slide-bar-item v-for="item in menu" :key="item.path" :item="item"
          :padding-left="24"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import permission from '@/router/permission'
import SlideBarItem from '@components/SideBar/SlideBarItem'
export default {
  name: 'SideBar',
  components: {
    SlideBarItem
  },
  computed: {
    menu() {
      return permission
    }
  },
  mounted() {
    // console.log(this.menu)
  }
}
</script>

<style lang="scss" scoped>
.slide-bar-box {
  width: 100%;
  height: 100%;
  /deep/ .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  .el-scrollbar {
    height: 100%;
    /deep/ .el-scrollbar__view {
      height: 100%;
    }
    /deep/ .el-scrollbar__bar.is-vertical {
      right: 0;
    }
    .help-menu {
      height: 100%;
    }
  }
}
</style>
