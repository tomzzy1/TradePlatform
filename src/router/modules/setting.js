// params setting page for goods
// created by Chen

import Layout from '@/layout'

const settingRouter = {
    path: '/setting',
    component: Layout,
    children: [
        {
            path: '/setting',
            component: () => import('@/views/setting/setting'),
            name: 'Setting',
            meta: {
                    icon: 'el-icon-edit',
                    roles: ['admin'],
                    title: 'Setting'
                }
        }
    ]
}

export default settingRouter