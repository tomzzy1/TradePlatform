// crowdsourcing page for goods
// created by Chen

import Layout from '@/layout'

const crowdsourcingRouter = {
    path: '/crowdsourcing',
    component: Layout,
    children: [
        {
            path: '/crowdsourcing',
            component: () => import('@/views/crowdsourcing/crowdsourcing'),
            name: 'Crowdsourcing',
            meta: { title: 'Crowdsourcing',
                    icon: 'el-icon-edit-outline',
                    roles: ['buyer', 'admin']
                  }
        }
    ]
}

export default crowdsourcingRouter