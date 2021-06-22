// cart for goods
// created by Chen

import Layout from '@/layout'

const cartRouter = {
    path: '/cart',
    component: Layout,
    children: [
        {
            path: '/cart',
            component: () => import('@/views/cart/cart'),
            name: 'Cart',
            meta: { title: 'Cart',
                    icon: 'list',
                    roles: ['buyer', 'admin']
                  }
        }
    ]
}

export default cartRouter