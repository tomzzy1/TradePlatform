// post questions gallery for seller
// created by Chen

import Layout from '@/layout'

const postRouter = {
    path: '/post',
    component: Layout,
    children: [
        {
            path: '/post',
            component: () => import('@/views/post/post'),
            name: 'Post',
            meta: { title: 'Post',
                    icon: 'guide',
                    roles: ['seller']
                  }
        }
    ]
}

export default postRouter