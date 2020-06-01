import Page from '@/views/Page'

const permission = [
  {
    path: '/page',
    name: 'page',
    redirect: '/page/editor',
    meta: {
      title: '自定义侧导航',
      hidden: false
    },
    component: Page,
    children: [{
      path: 'editor',
      name: 'editor',
      meta: {
        title: '编辑',
        hidden: false
      },
      component: () => import('@/components/Container')
    }, {
      path: 'documentMain',
      name: 'documentMain',
      meta: {
        title: '内容',
        hidden: false
      },
      component: () => import('@/components/DocumentMain')
    }]
  }
]

export default permission
