// help page for buyer
// created by Chen

import Layout from '@/layout'

const helpBuyerRouter = {
    path: '/help_buyer',
    component: Layout,
    children: [
        {
            path: '/help_buyer',
            component: () => import('@/views/help_buyer/help_buyer'),
            name: 'Help',
            meta: {
                    icon: 'el-icon-info',
                    roles: ['buyer']
                },
        }
    ]
}

export default helpBuyerRouter