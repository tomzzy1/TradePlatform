const Mock = require('mockjs')
const { deepClone } = require('../utils')
const { asyncRoutes, constantRoutes } = require('./routes.js')

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes.filter(i => i.path !== '/permission')
  },
  {
    key: 'worker',
    name: 'worker',
    description: 'Normal Editor. Can see all pages except permission page', // TODO: change description
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'buyer',
    name: 'buyer',
    description: 'Normal Editor. Can see all pages except permission page', // TODO: change description
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'seller',
    name: 'seller',
    description: 'Just a visitor. Can only see the home page and the document page', // TODO: change description
    routes: [{
      path: '',
      redirect: 'upload'
      // children: [
      //   {
      //     path: 'dashboard',
      //     name: 'Dashboard',
      //     meta: { title: 'dashboard', icon: 'dashboard' }
      //   }
      // ]
    }]
  }
]

module.exports = [
  // mock get all routes form server
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // add role
  {
    url: '/vue-element-admin/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
