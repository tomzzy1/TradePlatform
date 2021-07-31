<template>
    <div class="app-container">

        <!-- <span>{{ listQuery.id }}</span> -->
        <el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%;"
        >

            <el-table-column label="Name" align="center" min-width="200px">
                <template slot-scope="{row}">
                    <span>{{ row.name }}</span>
                </template>
            </el-table-column>

            <el-table-column label="Query" align="center" min-width="400px">
                <template slot-scope="{row}">
                    <span>{{ row.query }}</span>
                </template>
            </el-table-column>

            <el-table-column label="Price" align="center" width="200px">
                <template slot-scope="{row}">
                    <span>${{ row.price }}</span>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

        <div class="operation_bar">
            <el-card shadow="hover">
                <span class="total_price">Total Price: ${{ total_price}} </span>
                <br />
                <br />
                <el-button v-waves class="order_button" type="success" icon="el-icon-check" @click="orderGoods">
                    Pay
                </el-button>
                <router-link class="router_link" :to="{path:'/cart'}"><el-button v-waves class="order_button" type="danger" icon="el-icon-close" @click="cancelOrder">
                    Cancel
                </el-button></router-link>
            </el-card>
        </div>

    </div>
</template>

<style>

    .operation_bar {
        text-align: center;
        margin-top: 20px;
    }

    .total_price {
        font-family: 'Times New Roman', Times, serif;
    }

    .order_button {
        width: 150px;
        text-align: center;
        margin-left: 10px;
    }

    .router_link {
        margin-right: 10px;
    }

</style>

<script>
import { fetchList, orderCompleted, orderCancel, orderConfirm } from '@/api/order'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
    id: undefined,
    name: 'order',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            id: undefined,
            tableKey: 0,
            total: 0,
            list: null,
            // list: [
            //     {name: "Dataset 3", query: " - ", price: 13, date: "2021/2/21"},
            //     {name: "Dataset 7", query: "SELECT Column 1 FROM Table 2 WHERE Column > 21", price: 34, date: "2021/9/2"},
            //     {name: "Dataset 21", query: " - ", price: 13, date: "2021/3/4"}
            // ],
            order_success: undefined,
            total_price: 0,
            listLoading: false,
            listQuery: {
                // name: undefined,
                // number: undefined,
                // price: undefined,
                // id: undefined,s
                page: 1,
                limit: 20
            }
        }
    },
    // beforeCreate() {
    //     var query = this.$route.query
    //     // console.clear()
    //     // console.warn(query)
    //     if (query) {
    //         this.listQuery.id = query.order_id
    //         this.id = query.order_id
    //     }
    //     // console.warn(this.id)
    // },
    created() {
        // if (this.$route.query){
        //     var query = this.$route.query
        // }
        // var query = this.$route.query
        // // console.clear()
        // // console.warn(query)
        // if (query) {
        //     this.listQuery.id = query.order_id
        //     this.id = query.order_id
        // }
        this.getList()
    },
    methods: {
        getList() {
            // this.listLoading = true
            // console.clear()
            // console.warn(this.listQuery)
            // var tmp_listQuery = {
            //     id: this.listQuery.id,
            //     page: this.listQuery.page,
            //     limit: this.listQuery.limit
            // }
            // if (!(this.listQuery.id)) {
            //     this.$message.error("There is no current order!")
            // } else {
                fetchList(this.listQuery).then(response => {
                    this.list = response.data.items
                    this.total = response.data.total
                    this.total_price = response.data.total_prices

                    // simulation for timeout
                    setTimeout(() => {
                        this.listLoading = false
                    }, 1.5 * 1000)

                    // console.clear()
                    // console.warn(this.listQuery)
                })
                // this.getPrice()
            }
        },
        getPrice() {
            var total_price = 0
            if (this.list.length > 0) {
                for (let i = 0; i < this.list.length; i++) {
                    total_price += this.list[i].price
                }
            }
            this.total_price = total_price
        },
        orderGoods() {
            // orderConfirm(this.total_price)
            // api for Ali Pay or Wechat Pay
            orderCompleted({id: this.id})
        },
        cancelOrder() {
            // this.listQuery.id = undefined
            this.total_price = 0
            orderCancel({id: this.id})
        }
    }
}
    
</script>