<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.sort" style="width: 140px; margin-right: 30px;" class="filter-item" @change="handleFilter">
                <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
            </el-select>
            <el-select v-model="listQuery.importance" placeholder="Author" clearable style="width: 130px; margin-right: 5px;" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="Size" clearable class="filter-item" style="width: 130px; margin-right: 5px;">
                <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="Time" clearable class="filter-item" style="width: 130px">
                <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-input placeholder="Name" style="width: 200px; margin-right: 5px; margin-left: 30px" class="filter-item" @keyup.enter.native="handleFilter" />
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search"  @click="handleFilter">
                Search
            </el-button>
        </div>

        <div class="app-grid">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4" :span="4" v-for="o in 20" :key="o" >
                    <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div>
                        <span class="dataset_name">DataSet</span>
                        <br />
                        <span class="dataset_info">This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.</span>
                        <br />
                        <span class="dataset_author">Author: ZJU</span>
                        <br />
                        <span class="dataset_size">Size: 18650</span>
                        <br />
                        <span class="dataset_source">Source: www.zju.com</span>
                        <br />
                        <span class="dataset_time">Time: 2 months ago</span>
                        <div class="bottom clearfix">
                        <el-button type="text" class="button">Add to Cart</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style>

    .el-col {
        margin-bottom: 20px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .el-card {
        min-width: 100px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }

    .dataset_name {
        font-size: 30px;
        font-weight: bold;
        color: #337ab7;
        display: block;
        margin-left: 10px;
        margin-top: 10px;
    }

    .dataset_info {
        font-size: 15px;
        font-style: italic;
        display: block;
        margin-left: 10px;
    }

    .dataset_author {
        font-size: 10px;
        margin-left: 10px;
    }

    .dataset_size {
        font-size: 10px;
        margin-left: 10px;
    }

    .dataset_source {
        font-size: 10px;
        margin-left: 10px;
    }

    .dataset_time {
        font-size: 10px;
        margin-left: 10px;
    }

</style>

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