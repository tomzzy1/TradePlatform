const Mock = require('mockjs')

const List = []
const count = 10

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        // id: '@increment',
        // timestamp: +Mock.Random.date('T'),
        name: 'DataSet '+ (i+1),
        number: '@integer(1, 5)',
        price: '$@float(0, 100, 2, 2)',
        // source: 'www.zju.com',
        // size: '@integer(1, 5)GB',
        // author: 'ZJU'
    }))
}

module.exports = [
    {
        url: '/vue-element-admin/order/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 20 } = config.query

            let mockList = List

            const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

            return {
                code: 20000,
                data: {
                    total_prices: pageList.length,
                    total: mockList.length,
                    items: pageList
                }
            }
        }
    }
]