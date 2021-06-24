// upload info of goods
// created by chen

import Layout from '@/layout'

const uploadRouter = {
    path: '/upload_item',
    component: Layout,
    children: [
        {
            path: '/upload_item',
            component: () => import('@/views/upload_item/upload_item'),
            name: 'Upload',
            meta: { title: 'Upload',
                    icon: 'guide',
                    roles: ['buyer', 'seller', 'admin']
                  }
        }
    ]
}

export default uploadRouter