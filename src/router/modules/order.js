// oder of goods
// created by Chen

import Layout from '@/layout'

const orderRouter = {
    path: '/order',
    component: Layout,
    children: [
        {
            path: '/order',
            component: () => import('@/views/order/order'),
            name: 'Order',
            meta: { title: 'Order',
                    icon: 'el-icon-sold-out',
                    roles: ['buyer', 'admin']
                  }
        }
    ]
}

export default orderRouter