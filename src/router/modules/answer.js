// answer for crowdsourcing questions
// created by Chen

import Layout from '@/layout'

const answerRouter = {
    path: '/answer',
    component: Layout,
    children: [
        {
            path: '/answer/id/:id/',
            component: () => import('@/views/answer/answer'),
            name: 'Cart',
            meta: { title: 'Answer',
                    icon: 'el-icon-edit-outline',
                    roles: ['worker']
                  },
            hidden: true
        }
    ]
}

export default answerRouter