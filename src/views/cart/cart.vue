<template>
  <div class="app-container">
    <div class="filter-container">
    <div align="right">
    <el-select style="width: 140px; margin-right: 10px;" class="filter-item" v-model="listQuery.search">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-input v-model="listQuery.searching_content" placeholder="Search" style="width: 200px; margin-right: 10px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" v-model="searching_content">
        Search
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >

      <el-table-column label="Selected" align="center" width="100px">
        <template slot-scope="{row}">
          <el-checkbox v-model="row.checked"></el-checkbox>
        </template>
      </el-table-column>

      <!-- <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column> -->
      
      <el-table-column label="Name" min-width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Time" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" width="80px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Query" align="center" min-width="200px">
        <template slot-scope="{row}">
          <span>{{ row.query }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <!-- <el-button v-waves type="primary" size="mini" @click="increaseNumber(row)">
            +
          </el-button>
          <el-button v-waves type="primary" size="mini" @click="decreaseNumber(row)">
            -
          </el-button> -->
          <!-- <el-button v-waves size='mini' type="success" @click="buyGood(row)"> -->
          <el-button v-waves size='mini' type="success" @click="buyGood(row)"><router-link :to="{path:'/order', query: {order_id: order_ID}}">
            Buy
          </router-link></el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div align="right" style="margin-top:20px;">
      <!-- <el-button v-waves class="buy_button" type="success" icon="el-icon-sold-out" @click="buyGoods" style="float: right"> -->
      <el-button v-waves class="buy_button" type="success" icon="el-icon-sold-out" style="width: 195px;" @click="buyGoods"><router-link :to="{path:'/order', query: {order_id: order_ID}}">
        Buy
      </router-link></el-button>
      </div>
    </div>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import { fetchList, updateCart, deleteCart, buyCart, getOrderID } from '@/api/cart'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
    name: 'cart',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            tableKey: 0,
            list: null,
            // search: 'Name',
            // list: [
            //   {id: 1, name: "Dataset 3", query: " - ", price: "$13", date: "2021/2/21"},
            //   {id: 2, name: "Dataset 7", query: "SELECT Column 1 FROM Table 2 WHERE Column > 21", price: "$34", date: "2021/9/2"},
            //   {id: 3, name: "Dataset 21", query: " - ", price: "$12", date: "2021/3/4"},
            //   {id: 4, name: "Dataset 4", query: " - ", price: "$43", date: "2021/5/7"},
            //   {id: 5, name: "Dataset 6", query: " SELECT Column 3 FROM Table 4 WHERE Column < 21 ", price: "$14", date: "2021/12/21"}
            // ],
            total: undefined,
            listLoading: false,
            listQuery: {
                page: 1,
                limit: 20,
                searching_content: undefined,
                search: "name"
            },
            sortOptions: [
                { label: 'name', key: 'name' },
                { label: 'price', key: 'price' },
                { label: 'query', key: 'query'}
            ],
            temp: {
                id: undefined,
                timestamp: new Date(),
                name: '',
                // number: '',
            },
            order_ID: 123456,
            dialogFormVisible: false,
            dialogPvVisible: false,
            dialogStatus: '',
            dialogPvVisible: false,
            pvData: []
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

                // simulation for timeout
                setTimeout(() => {
                    this.listLoading = false
                }, 1.5 * 1000)

                for (let i = 0; i < this.list.length; i++) {
                  this.list[i].checked = false
                }
            })
        },
        handleFilter() {
            this.listQuery.page = 1
            this.getList()
        },
        sortChange(data) {
            const { prop, order } = data
            if (prop === 'id') {
                this.sortByID(order)
            }
        },
        sortByID(order) {
            if (order === 'ascending') {
                this.listQuery.sort = '+id'
            } else {
                this.listQuery.sort = '-id'
            }
            this.handleFilter()
        },
        resetTemp() {
            this.temp = {
                id: undefined,
                timestamp: new Date(),
                name: '',
                number: ''
            }
        },
        increaseNumber(row) {
          row.number += 1
          this.changeNum(row, row.number)
        },
        decreaseNumber(row) {
          if (row.number != 1) {
            row.number -= 1
            this.changeNum(row, row.number)
          } else {
            this.handleDelete(row, )
            this.changeNum(row, row.number)
          }
        },
        handleDelete(row, index) {
          this.$notify({
            title: 'Success',
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.list.splice(index, 1)
          deleteCart(row.id)
        },
        // handleUpdate(row) {
        //     this.temp = Object.assign({}, row)
        //     this.temp.timestamp = new Date(this.temp.timestamp)
        //     this.dialogStatus = 'update'
        //     this.dialogFormVisible = true
        //     this.$nextTick(() => {
        //         this.$refs['dataForm'].clearValidate()
        //     })
        // },
        // updateData() {
        //     this.$refs['dataForm'].validate((valid) => {
        //         if (valid) {
        //             const tempData = Object.assign({}, this.temp)
        //             tempData.timestamp = +new Date(tempData.timestamp)
        //             updateCart(tempData).then(() => {
        //                 const index = this.list.findIndex(v => v.id === this.temp.id)
        //                 this.list.splice(index, 1, this.temp)
        //                 this.dialogFormVisible = false
        //                 this.$notify({
        //                     title: 'Success',
        //                     message: 'Update Successfully',
        //                     type: 'success',
        //                     duration: 2000
        //                 })
        //             })
        //         }
        //     })
        // },
        changeNum(row, new_num) {
            var tempItem = {
            id: row.id,
            num: new_num
          }
          updateCart(tempItem)
        },
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ascending' : 'descending'
        },
        buyGoods() {
          var idArray = new Array()
          for (let i = 0; i < this.list.length; i++){
            if (this.list[i].checked == true) {
              idArray.push(this.list[i].id)
            }
          }
          console.clear()
          console.warn(idArray)
          if (idArray.length == 0) {
            this.$message.error('Please select the dataset you want for an order!')
          } else {
            buyCart(idArray)
            this.getID()
          }
        },
        buyGood(row) {
          var idArray = new Array()
          idArray.push(row.id)
          buyCart(idArray)
          console.clear()
          console.warn(idArray)
          this.getID()
        },
        getID() {
          getOrderID().this(response => {
            this.order_ID = response.data.order_id
          })
        }

    }
}

</script>
