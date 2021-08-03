// post questions for seller
// created by Chen

import Layout from '@/layout'

const postQuestionRouter = {
    path: '/post_question',
    component: Layout,
    children: [
        {
            path: '/post_question/id/:id',
            component: () => import('@/views/post_question/post_question'),
            name: 'Post',
            meta: { title: 'Post',
                    icon: 'guide',
                    roles: ['seller']
                  },
            hidden: true
        }
    ]
}

export default postQuestionRouter