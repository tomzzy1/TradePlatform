<template>
    <div class="app-container">
        <el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%;"
        >
            <!-- <el-table-coloum label="ID" prop="id" align="center" width="80">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-coloum> -->

            <el-table-coloum label="Name" prop="name" align="center" min-width="100">
                <template slot-scope="{row}">
                    <span>{{ row.name }}</span>
                </template>
            </el-table-coloum>

            <el-table-coloum label="Number" prop="number" align="center" width="100">
                <template slot-scope="{row}">
                    <span>{{ row.number }}</span>
                </template>
            </el-table-coloum>

            <el-table-coloum label="Price" prop="price" align="center" width="100">
                <template slot-scope="{row}">
                    <span>{{ row.price }}</span>
                </template>
            </el-table-coloum>
        </el-table>

        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

        <!-- <div class="operation_bar">
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
        </div> -->

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
import { fetchList, orderConfirm } from '@/api/order'
import waves from '@/directive/waves'

export default {
    name: 'order',
    directives: {waves},
    data() {
        return {
            total: 0,
            list: null,
            order_success: undefined,
            total_price: 10,
            list_loading: true,
            listQuery: {
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