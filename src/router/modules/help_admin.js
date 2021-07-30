// help page for admin
// created by Chen

import Layout from '@/layout'

const helpSellerRouter = {
    path: '/help_admin',
    component: Layout,
    children: [
        {
            path: '/help_admin',
            component: () => import('@/views/help/help_admin'),
            title: 'Help',
            name: 'Help',
            meta: {
                    title: 'Help',
                    icon: 'el-icon-info',
                    roles: ['admin']
                },
        }
    ]
}

export default helpSellerRouter