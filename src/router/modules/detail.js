// detail page for goods
// created by Chen

import Layout from '@/layout'

const detailRouter = {
    path: '/detail',
    component: Layout,
    children: [
        {
            path: '/detail/name/:name/',
            component: () => import('@/views/detail/detail'),
            name: 'Detail',
            meta: {
                    icon: 'el-icon-view',
                    roles: ['buyer']
                },
            hidden: true
        }
    ]
}

export default detailRouter