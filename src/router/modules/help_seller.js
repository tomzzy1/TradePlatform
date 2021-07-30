// help page for seller
// created by Chen

import Layout from '@/layout'

const helpSellerRouter = {
    path: '/help_seller',
    component: Layout,
    children: [
        {
            path: '/help_seller',
            component: () => import('@/views/help/help_seller'),
            name: 'Help',
            meta: {
                    title: 'Help',
                    icon: 'el-icon-info',
                    roles: ['seller']
                },
        }
    ]
}

export default helpSellerRouter