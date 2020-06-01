<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.name">
        <router-link :to="`${item.path}`">{{ item.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import layout from '@/router/layout.js'
import permission from '@/router/permission.js'
export default {
  name: 'Layout',
  data() {
    return {
      list: [...permission, ...layout]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  font-size: 16px;
  padding: 32px;
  list-style: none;
  li {
    margin: 0 12px;
    &:hover {
      color: $text-color
    }
  }
}
</style>
