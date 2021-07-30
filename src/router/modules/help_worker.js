// help page for worker
// created by Chen

import Layout from '@/layout'

const helpWorkerRouter = {
    path: '/help_worker',
    component: Layout,
    children: [
        {
            path: '/help_worker',
            component: () => import('@/views/help/help_worker'),
            name: 'Help',
            meta: {
                    title: 'Help',
                    icon: 'el-icon-info',
                    roles: ['worker']
                },
        }
    ]
}

export default helpWorkerRouter