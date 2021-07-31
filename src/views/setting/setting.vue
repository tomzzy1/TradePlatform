<template>
    <div class="app-container">
        <div class="filter-container">
            <div align="right">
            <el-select v-model="search" style="width: 140px;" class="filter-item" @change="handleFilter">
                <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
            </el-select>
            <!-- <el-select v-model="listQuery.importance" placeholder="Author" clearable style="width: 130px; margin-right: 5px;" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="Size" clearable class="filter-item" style="width: 130px; margin-right: 5px;">
                <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select>
            <el-select v-model="listQuery.type" placeholder="Time" clearable class="filter-item" style="width: 130px"> -->
                <!-- <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
            </el-select> -->
            <el-input placeholder="Search" style="width: 200px; margin-right: 10px; margin-left: 10px" class="filter-item" v-model="searching_content" />
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search"  @click="handleFilter">
              Search
            </el-button>
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
  
</style>

<script>
import { fetchList, addtoCart } from '@/api/gallery'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
    name: 'gallery_table',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            price_coefficient: undefined,
            sensitivity_degree: undefined,
            tableKey: 0,
            total: 0,
            listLoading: false,
            // List: null,
            addToCartTime: null,
            query: null,
            query1: null,
            query2: null,
            search: 'Name',
            searching_content: undefined,
            columnOptions: [
                {value: "*", label: "*"},
                {value: "Column 1", label: "Column 1"},
                {value: "Column 2", label: "Column 2"},
                {value: "Column 3", label: "Column 3"}
            ],
            tableOptions: [
                {value: "Table 1", label: "Table 1"},
                {value: "Table 2", label: "Table 2"},
                {value: "Table 3", label: "Table 3"}
            ],
            columns: [],
            tableName: null,
            List: [
              {ID: 1, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "1GB", Source: "www.zju.com", Time: "2000"},
              {ID: 2, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "2GB", Source: "www.zju.com", Time: "2001"}],
            //   {ID: 3, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "3GB", Source: "www.zju.com", Time: "2002"},
            //   {ID: 4, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "4GB", Source: "www.zju.com", Time: "2003"},
            //   {ID: 5, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "5GB", Source: "www.zju.com", Time: "2004"},
            //   {ID: 6, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "6GB", Source: "www.zju.com", Time: "2005"},
            //   {ID: 7, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "7GB", Source: "www.zju.com", Time: "2006"},
            //   {ID: 8, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "8GB", Source: "www.zju.com", Time: "2008"},
            //   {ID: 9, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "9GB", Source: "www.zju.com", Time: "2009"},
            //   {ID: 10, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "10GB", Source: "www.zju.com", Time: "2010"},
            //   {ID: 11, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "11GB", Source: "www.zju.com", Time: "2011"}
            // ],
            listQuery: {
                id: undefined,
                page: 1,
                limit: 10,
                sort: '+id',
            },
            sortOptions: [
                { label: 'Name', key: 'name' },
                { label: 'Source', key: 'source' },
                { label: 'Size', key: 'size'}
            ],
            temp: {
                id: undefined,
                timestamp: new Date(),
                name: '',
                number: '',
            },
            dialogVisible: false,
            dialogID: null
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            // this.listLoading = true
            // fetchList(this.listQuery).then(response => {
            //     this.List = response.data.items
            //     this.total = response.data.total

            //     // simulation for timeout
            //     setTimeout(() => {
            //         this.listLoading = false
            //     }, 1.5 * 1000)
            // })
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
        // addToCart(id) {
        //     var tmpID = id
        //     if (id != null)
        //     {
        //         addtoCart(tmpID)
        //     }
        // },
        updateDialogID(id) {
            this.dialogID = id
        },
        deleteDialogID() {
            this.dialogID = null
            this.query1 = null
            this.query2 = null
            this.columns = []
            this.tableName = null
            console.warn("Attention!")
        },
        directAddToCart(tmpID) {
            // // console.warn(tmpID)
            // this.query = ""
            // var current_time = new Date()
            // this.addToCartTime = current_time.getTime()
            // // console.warn(this.addToCartTime)
            // var tmp_data = new Object() 
            // tmp_data.id = tmpID
            // tmp_data.query = this.query
            // tmp_data.date = this.addToCartTime
            // // console.warn(tmp_data)
            // addtoCart(tmp_data)
        },
        Cancel() {
            this.dialogVisible = false
            this.deleteDialogID()
        },
        setParams() {
            this.dialogVisible = false
            this.deleteDialogID()
        },
        updateAndQuery(tmpID) {
            this.dialogVisible = true
            this.updateDialogID(tmpID)
        }
    }
}

</script>