const layout = [{
  path: '/simpleTinymce',
  name: 'simpleTinymce',
  meta: {
    title: 'Tinymce编辑器(简单配置)'
  },
  component: () => import('@/components/Tinymce/index')
}, {
  path: '/tinymce',
  name: 'tinymce',
  meta: {
    title: 'Tinymce编辑器(经典配置)'
  },
  component: () => import('@/components/MorePluginsEditor')
}]

export default layout
