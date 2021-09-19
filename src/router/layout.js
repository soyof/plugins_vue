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
}, {
  path: '/imgZoom',
  name: 'imgZoom',
  meta: {
    title: '图片缩放'
  },
  component: () => import('@/views/imgZoom')
}]

export default layout
