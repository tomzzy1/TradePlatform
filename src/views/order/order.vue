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
            <el-table-coloum label="ID" prop="id" align="center" width="80">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-coloum>

            <el-table-coloum label="Name" prop="name" align="center" min-width="100">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
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

        <div class="operation_bar">
            <span>Total Price: {{ total_price}} </span>
            <el-button v-waves class="order_button" type="success" icon="el-icon-check" @click="orderGoods">
                Pay
            </el-button>
            <el-button v-waves class="order_button" type="danger" icon="el-icon-close" @click="orderCancel">
                Cancel
            </el-button>
        </div>

    </div>
</template>

<script>
import { fetchList, orderConfirm } from '@/api/order'
import waves from '@/directive/waves'

export default {
    name: 'order',
    directives: {waves},
    data() {
        return {
            order_success: undefined,
            total_price: 10,
            list_loading: true
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.listLoading = true
            fetchList().then(response => {
                this.list = response.data.items
                this.list = response.data.total

                // simulation for timeout
                setTimeout(() => {
                    this.listLoading = false
                }, 1.5 * 1000)
            })
        },
        orderGoods() {
            orderConfirm(total_price)
        },
        orderCancel() {

        }
    }
    
}
    
</script>