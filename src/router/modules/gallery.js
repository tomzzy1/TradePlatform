// gallery for goods
// created by Chen

import Layout from '@/layout'

const galleryRouter = {
    path: '/gallery',
    component: Layout,
    redirect: '/gallery/gallery_table',
    name: 'Gallery',
    meta: {
        title: 'Gallery',
        icon: 'table',
        roles: ['admin', 'buyer']
    },
    children: [
        {
            path: 'gallery_table',
            component: () => import('@/views/gallery/gallery_table'),
            name: 'gallery_table',
            meta: {title: 'Table'}
        },
        {
            path: 'gallery_grid',
            component: () => import('@/views/gallery/gallery_grid'),
            name: 'gallery_grid',
            meta: {title: 'Grid'}
        }
    ]
}

export default galleryRouter