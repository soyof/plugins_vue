<template>
  <div class="wrapper">
    <el-row class="header">
      <el-col class="nav-bar" :span="24">
        <nav-bar />
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col class="slide-bar" :span="4">
        <side-bar />
      </el-col>
      <el-col class="main" :span="20">
        <app-main />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from '@components/NavBar'
import SideBar from '@components/SideBar'
import AppMain from '@components/AppMain'
export default {
  name: 'Page',
  components: {
    NavBar,
    SideBar,
    AppMain
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100vh;
    .header {
      .nav-bar {}
    }
    .container {
      width: 100%;
      height: calc(100% - 50px);
      .slide-bar {
        height: 100%;
      }
      .main {
        height: 100%;
      }
    }
  }
</style>

