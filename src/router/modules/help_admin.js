// help page for admin
// created by Chen

import Layout from '@/layout'

const helpSellerRouter = {
    path: '/help_admin',
    component: Layout,
    children: [
        {
            path: '/help_admin',
            component: () => import('@/views/help_admin/help_admin'),
            name: 'Help',
            meta: {
                    icon: 'el-icon-info',
                    roles: ['admin']
                },
        }
    ]
}

export default helpSellerRouter