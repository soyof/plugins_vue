<template>
  <div class="ig-img img-zoom">
    <div class="img-box">
      <img v-zoom src="@/assets/images/60fea6071f.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgZoom',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .ig-img {
    width: 375px;
    height: 100VH;
    overflow: auto;
    .img-box {
      transform-origin: 0 0;
    }
    img {
      transform-origin: 0 0;
      object-fit: contain;
    }
  }
</style>
