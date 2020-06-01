const layout = [{
  path: '/tinymce',
  name: 'tinymce',
  meta: {
    title: 'Tinymce编辑器'
  },
  component: () => import('@/components/Tinymce/index')
}]

export default layout
