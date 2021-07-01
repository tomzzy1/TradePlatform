// const Mock = require('mockjs')

// const List = []
// const count = 100

// const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
// const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

// for (let i = 0; i < count; i++) {
//     List.push(Mock.mock({
//         id: '@increment',
//         timestamp: +Mock.Random.date('T'),
//         name: 'DataSet '+ (i+1),
//         number: '@integer(1, 5)',
//         price: '$@float(0, 100, 2, 2)',
//         source: 'www.zju.com',
//         size: '@integer(1, 5)GB',
//         author: 'ZJU'
//     }))
// }

// module.exports = [
//   {
//     url: '/vue-element-admin/cart/list',
//     type: 'get',
//     response: config => {
//       const { number, price, name, page = 1, limit = 20, sort } = config.query

//       let mockList = List

//       if (sort === '-id') {
//         mockList = mockList.reverse()
//       }

//       const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

//       return {
//         code: 20000,
//         data: {
//           total: mockList.length,
//           items: pageList
//         }
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/detail',
//     type: 'get',
//     response: config => {
//       const { id } = config.query
//       for (const article of List) {
//         if (article.id === +id) {
//           return {
//             code: 20000,
//             data: article
//           }
//         }
//       }
//     }
//   },

//   {
//     url: '/vue-element-admin/article/update',
//     type: 'post',
//     response: _ => {
//       return {
//         code: 20000,
//         data: 'success'
//       }
//     }
//   }

// ]

// for the test of gallery grid

const Mock = require('mockjs')
List = []
count = 12

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        ID: '@increment',
        Description: 'This is a dataset. This is a dataset. This is a dataset. This is a dataset. This is a Dataset. This is a dataset. This is a dataset.',
        Time: +Mock.Random.date('T'),
        Name: 'DataSet '+ (i+1),
        Source: 'www.zju' + (i+1) + '.com',
        Size: '@integer(1, 5)GB',
    }))
}

// List = [
//   {ID: 1, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "1GB", Source: "www.zju.com", Time: "2000"},
//   {ID: 2, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "2GB", Source: "www.zju.com", Time: "2001"},
//   {ID: 3, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "3GB", Source: "www.zju.com", Time: "2002"},
//   {ID: 4, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "4GB", Source: "www.zju.com", Time: "2003"},
//   {ID: 5, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "5GB", Source: "www.zju.com", Time: "2004"},
//   {ID: 6, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "6GB", Source: "www.zju.com", Time: "2005"},
//   {ID: 7, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "7GB", Source: "www.zju.com", Time: "2006"},
//   {ID: 8, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "8GB", Source: "www.zju.com", Time: "2008"},
//   {ID: 9, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "9GB", Source: "www.zju.com", Time: "2009"},
//   {ID: 10, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "10GB", Source: "www.zju.com", Time: "2010"},
//   {ID: 11, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "11GB", Source: "www.zju.com", Time: "2011"}
// ]


module.exports = [
  {
    url: '/vue-element-admin/gallery/list',
    type: 'get',
    response: config => {
      const { ID, page = 1, limit = 6, sort } = config.query

      let mockList = List

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  // {
  //   url: '/vue-element-admin/gallery/cart',
  //   type: 'post',
  //   response: config => {
  //     const { id } = config.query
  //     for (const article of List) {
  //       if (article.id === +id) {
  //         return {
  //           code: 20000,
  //           data: article
  //         }
  //       }
  //     }
  //   }
  // }
]


