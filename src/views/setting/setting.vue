<template>
    <div class="app-container">
        <div class="filter-container">
            <div align="right">
            <el-select v-model="listQuery.search" style="width: 140px;" class="filter-item">
                <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
            </el-select>
            <el-input placeholder="Search" style="width: 200px; margin-right: 10px; margin-left: 10px" class="filter-item" v-model="listQuery.searching_content" />
            <el-button-group>
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search"  @click="Search">
              Search
            </el-button>
            <el-button v-waves class="filter-item" type="info" icon="el-icon-close" @click="clearSearch">
                Clear
            </el-button>
            </el-button-group>
            </div>
        </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="List"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="Name" align="center" width="150px">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Description" align="center" min-width="200px" style="word-wrap:break-word;">
        <template slot-scope="{row}">
          <span style = "word-wrap:break-word;">{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Time" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.date }}</span>
        </template>
      </el-table-column>
      
      <el-table-column label="Size" align="center" width="80px">
        <template slot-scope="{row}">
          <span>{{ row.size }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Source" align="center" width="120px">
        <template slot-scope="{row}">
          <span>{{ row.source }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="240" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button  @click="updateAndQuery(row.id)" type = "primary" style="width: 200px;">
            Set the Parameters
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
          title="Setting"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <span class="notice">Please type in the parameters for the dataset.<br /></span>
          <el-card class="param_class">
              <span class="title">
                  Price Coefficient
              </span>
              <el-input class="params_input" placeholder="Number between 0 to 1" v-model="price_coefficient"/>
              <span class="title">
                  Sensitivity Degree
              </span>
              <el-input class="params_input" placeholder="Number between 0 to 1" v-model="sensitivity_degree"/>
          </el-card>
          <div align="center">
            <el-button v-waves @click="setParams(dialogID)" type="success" style="width:30%; height:50px;">
              Confirm
            </el-button>
            <el-button v-waves type="danger" class="cancel_button" @click="Cancel" style="width:30%; height:50px;">
              Cancel
            </el-button>
          </div>
        </el-dialog>

        <el-dialog
          title="Select Pricing Strategies"
          :visible.sync="dialogVisible2"
          width="80%">
          <span class="notice">Please type in the query.<br /></span>
          <el-card class="param_class">
              <span class="title">
                  Query
              </span>
              <el-input class="params_input" placeholder="Query Language" v-model="strategyQuery.query"/>
              <div align="right">
              <el-button style="primary" @click="getRes">Test</el-button>
              </div>
          </el-card>
          <el-card class="formula_class"
          >
            <span class="formula">Method 1: xxxxxxxx</span>
            <span class="formula">Method 2: xxxxxxxx</span>
            <span class="formula_last">Method 3: xxxxxxxx</span>
          </el-card>
          <bar-chart :chart-data="barChartData" />
          <br />
          <div align="center">
          <el-radio-group class="el_radio" v-model="strategy" size="medium">
            <el-radio-button label=1>Method 1</el-radio-button>
            <el-radio-button label=2>Method 2</el-radio-button>
            <el-radio-button label=3>Method 3</el-radio-button>
          </el-radio-group>
          </div>
          <div align="center">
            <el-button v-waves @click="Confirm" type="success" style="width:30%; height:50px;">
              Confirm
            </el-button>
            <el-button v-waves type="danger" class="cancel_button" @click="Cancel" style="width:30%; height:50px;">
              Cancel
            </el-button>
          </div>
        </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<style>

  .notice {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 15px;
      margin-bottom: 30px;
      display: block;
      font-style: italic;
    }

    .query_input {
      /* margin-top: 10px; */
      /* margin-bottom: 50px; */
      width: 100%;
      /* display: block;
      float: center; */
    }

    .selectAndQuery {
        margin-top: 20px;
    }

    .columnSelection {
        width: 85%;
        margin-bottom: 10px;
        /* float: right; */
    }

    .tableSelection {
        width: 88%;
        /* float: right; */
        /* margin-bottom: 20px; */
    }

    .param_class {
        margin-bottom: 20px;
    }

    .title {
        display: block;
        font-size: 18px;
        font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    }

    .params_input {
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .formula_class {
      margin-bottom: 20px;
    }

    .formula {
      margin-bottom: 10px;
      display: block;
      font-size: 20px;
    }

    .formula_last {
      display: block;
      font-size: 20px;
    }

    .el_radio {
      margin-bottom: 20px;
    }
  
</style>

<script>
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import { fetchList, postData, postQuery, postParams } from '@/api/setting'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

const barChartData = {
    nameData: [1, 2, 3, 4],
    priceData: [100, 120, 161, 134],
    timeData: [120, 82, 91, 154],
    param1Data: [180, 160, 151, 106]
}

export default {
    name: 'gallery_table',
    components: { Pagination,
                  LineChart,
                  BarChart },
    directives: { waves },
    data() {
        return {
            price_coefficient: undefined,
            sensitivity_degree: undefined,
            tableKey: 0,
            total: 0,
            listLoading: false,
            List: null,
            methods: undefined,
            // methods: [
            //   { name: "Method 1", time: 10, price: 50, param1: 1, param2: 2, param3: 3 },
            //   { name: "Method 2", time: 30, price: 60, param1: 1, param2: 2, param3: 3 },
            //   { name: "Method 3", time: 20, price: 20, param1: 1, param2: 2, param3: 3 }
            // ]
            search: 'Name',
            searching_content: undefined,
            // List: [
            //   {id: 110, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "1GB", Source: "www.zju.com", Time: "2000"},
            //   {id: 119, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "2GB", Source: "www.zju.com", Time: "2001"}],
            listQuery: {
                // id: undefined,
                page: 1,
                limit: 10,
                search: 'name',
                searching_content: undefined
            },
            strategyQuery: {
              id: undefined,
              query: undefined,
            },
            sortOptions: [
                { label: 'name', key: 'name' },
                { label: 'source', key: 'source' },
                { label: 'size', key: 'size'}
            ],
            dialogVisible: false,
            dialogVisible2: false,
            dialogID: null,
            currentID: undefined,
            strategy: undefined
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.listLoading = true
            fetchList(this.listQuery).then(response => {
                this.List = response.data.items
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
        getSortClass: function(key) {
            const sort = this.listQuery.sort
            return sort === `+${key}` ? 'ascending' : 'descending'
        },
        updateDialogID(id) {
            this.dialogID = id
        },
        deleteDialogID() {
            this.dialogID = null
            this.columns = []
            this.tableName = null
            this.price_coefficient = undefined
            this.sensitivity_degree = undefined
            // this.currentID = undefined
            // console.warn("Attention!")
        },
        Cancel() {
            this.dialogVisible = false
            this.dialogVisible2 = false
            this.deleteDialogID()
            this.currentID = undefined
            this.strategyQuery.id = undefined
        },
        setParams(tmpID) {
            // console.clear()
            // console.warn(tmpID)
            var tmpData = {
              id: tmpID,
              price_coefficient: this.price_coefficient,
              sensitivity_degree: this.sensitivity_degree,
            }
            this.dialogVisible = false
            this.deleteDialogID()
            this.dialogVisible2 = true
            this.currentID = tmpID
            this.strategyQuery.id = this.currentID
        },
        updateAndQuery(tmpID) {
            this.dialogVisible = true
            this.updateDialogID(tmpID)
        },
        Search() {
          this.getList()
        },
        clearSearch() {
            this.listQuery.searching_content = undefined
            this.getList()
        },
        Confirm() {
          this.dialogVisible2 = false
          var tmpData = {
            id: this.currentID,
            // price_coefficient: this.price_coefficient,
            // sensitivity_degree: this.sensitivity_degree,
            pricing_strategy: this.strategy
          }
          // console.clear()
          // console.warn(tmpData)
          postData(tmpData)
        },
        getRes() {
          postQuery(this.strategyQuery).then(response => {
            this.methods = response.data.items
          })
        }
    }
}

</script>