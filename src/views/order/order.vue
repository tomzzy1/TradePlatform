<template>
    <div class="app-container">

        <!-- <span>Hello world!</span> -->
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

            <el-table-column label="Number" align="center" width="200px">
                <template slot-scope="{row}">
                    <span>{{ row.number }}</span>
                </template>
            </el-table-column>

            <el-table-column label="Price" align="center" width="200px">
                <template slot-scope="{row}">
                    <span>{{ row.price }}</span>
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
                <el-button v-waves class="order_button" type="danger" icon="el-icon-close" @click="orderCancel">
                    Cancel
                </el-button>
            </el-card>
        </div>

    </div>
</template>

<style>

    .operation_bar {
        text-align: center;
    }

    .total_price {
        font-family: 'Times New Roman', Times, serif;
    }

    .order_button {
        width: 150px;
        text-align: center;
    }

</style>

<script>
import { fetchList } from '@/api/order'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
    name: 'order',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            tableKey: 0,
            total: 0,
            list: null,
            order_success: undefined,
            total_price: 0,
            listLoading: true,
            listQuery: {
                // name: undefined,
                // number: undefined,
                // price: undefined,
                page: 1,
                limit: 20
            }
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.listLoading = true
            fetchList(this.listQuery).then(response => {
                this.list = response.data.items
                this.total = response.data.total
                this.total_price = response.data.total_prices

                // simulation for timeout
                setTimeout(() => {
                    this.listLoading = false
                }, 1.5 * 1000)
            })
        }
        // orderGoods() {
        //     orderConfirm(total_price)
        // },
        // orderCancel() {

        // }
    }
}
    
</script>