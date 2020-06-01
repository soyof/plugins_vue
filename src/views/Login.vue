<template>
  <div class="login" @click="login">
    登录
  </div>
</template>

<script>
// import { getDetail } from "@/api"

export default {
  name: 'Login',
  data() {
    return {}
  },
  mounted() {
    // getDetail().then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    login() {
      this.$store.dispatch('getIsLogin').then(() => {
        this.$router.push('/', onComplete => { }, onAbort => { })
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
