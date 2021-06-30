<template>
  <div class="app-container">
    <div class="filter-container">
    <el-select v-model="listQuery.sort" style="width: 140px; margin-right: 10px;" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-input v-model="listQuery.name" placeholder="Name" style="width: 200px; margin-right: 10px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <el-button v-waves class="buy_button" type="success" icon="el-icon-sold-out" @click="buyGoods" style="float: right">
        Buy
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
        <el-checkbox v-model="checked"></el-checkbox>
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
          <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" width="80px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Number" align="center" width="95">
        <template slot-scope="{row}">
          <span>{{ row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="330" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button v-waves type="primary" size="mini" @click="increaseNumber(row)">
            +
          </el-button>
          <el-button v-waves type="primary" size="mini" @click="decreaseNumber(row)">
            -
          </el-button>
          <el-button v-waves size='mini' type="success" @click="buyGood(row)">
            Buy
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import { fetchList, updateCart, deleteCart, buyCart } from '@/api/cart'
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
            total: 0,
            listLoading: true,
            listQuery: {
                page: 1,
                limit: 20,
                name: undefined,
                number: undefined,
                price: undefined,
                sort: '+id',
                checked: false
            },
            sortOptions: [
                { label: 'ID Ascending', key: '+id' },
                { label: 'ID Descending', key: '-id' }
            ],
            temp: {
                id: undefined,
                timestamp: new Date(),
                name: '',
                number: '',
            },
            dialogFormVisible: false,
            dialogPvVisible: false,
            dialogStatus: '',
            dialogPvVisible: false,
            pvData: [],
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
          for (i in row.list){
            if (i.checked == true) {
              idArray.push(i.id)
            }
          }
          buyCart(idArray)
        },
        buyGood(row) {
          var idArray = new Array()
          idArray.push(row.id)
          buyCart(idArray)
        }
    }
}

</script>
