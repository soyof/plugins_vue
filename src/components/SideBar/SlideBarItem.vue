<template>
  <div>
    <template v-if="item.children && item.children.length > 0">
      <div class="slide-item">
        <router-link :to="item.path">
          <div class="title" :style="{'padding-left': paddingLeft + 'px'}">{{ item.meta.title }}</div>
        </router-link>
        <slide-bar-item v-for="children in item.children" :key="children.path" :item="children"
          :padding-left="setPaddingLeft()"
        />
      </div>
    </template>
    <template v-else>
      <router-link :to="item.path">
        <div class="slide-item" :class="$route.path.indexOf(item.path) > 0 ? 'active' : '' ">
          <div class="title" :style="{'padding-left': paddingLeft + 'px'}">
            {{ item.meta.title }}
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SlideBarItem',
  components: {
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    paddingLeft: {
      type: Number,
      required: true
    }
  },
  mounted() {
    console.log(123)
  },
  methods: {
    setPaddingLeft() {
      if (this.item.children.length > 0) {
        return this.paddingLeft + 12
      }
      return this.paddingLeft
    }
  }
}
</script>

<style lang="scss" scoped>
  .slide-item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    &.active {
      background-color: #ecf5ff;
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
</style>
