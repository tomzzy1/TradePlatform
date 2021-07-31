<template>
    <div class="app-container">
        <div class="filter-container">
            <div align="right">
            <el-select v-model="listQuery.search" style="width: 140px;" class="filter-item" @change="handleFilter">
                <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
            </el-select>
            <el-input placeholder="Search" style="width: 200px; margin-right: 10px; margin-left: 10px" class="filter-item" v-model="listQuery.searching_content" />
            <el-button-group>
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search"  @click="searching">
                Search
            </el-button>
            <el-button v-waves class="filter-item" type="info" icon="el-icon-close" @click="clearSearch">
                Clear
            </el-button>
            </el-button-group>
            </div>
        </div>

        <div class="app-grid">
            <el-row :gutter="20">
                <el-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4" :span="4" v-for="item in List" :key="item" >
                    <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div>
                        <span class="dataset_name">{{ item.name }}</span>
                        <br />
                        <span class="dataset_info">{{ item.description }}</span>
                        <br />
                        <span class="dataset_size">Size: {{ item.size }}</span>
                        <br />
                        <span class="dataset_source">Source: {{ item.source }}</span>
                        <br />
                        <span class="dataset_time">Time: {{ item.date }}</span>
                        <div class="bottom clearfix">
                            <!-- <el-button type="text"
                             class="button"
                             @click="$router-link.go(`/detail/id`)">Details</el-button> -->
                            <router-link :to="{path:'/detail/name/' + item.name ,query:{name:item.name, id:item.id}}" class="detail_link">Details</router-link>
                            <!-- <router-link :to='`/detail/name/`+ item.name' class="detail_link">Details</router-link> -->
                        </div>
                        <!-- <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="updateAndQuery(item.id)">Query</el-button>
                        </div>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="directAddToCart(item.id)">Add To Cart</el-button>
                        </div> -->
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <el-dialog
          title="Query"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose">
          <span class="notice">You can either select the query language or type it in by yourself.<br />Be sure the query is correct.<br /></span>
          <el-card class="selectAndQuery">
          <span class="query_language">SELECT&nbsp;</span> 
          <el-select clearable class="columnSelection" v-model="columns" multiple placeholder="Name of Columns">
              <el-option
                v-for="item in columnOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
          <br />
          <span class="query_language">FROM&nbsp;&nbsp;&nbsp;</span>
          <el-select clearable class="tableSelection" v-model="tableName" placeholder="Name of Table">
              <el-option
                v-for="item in tableOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
          </el-card>
          <el-card class="query_input_card">
          <el-input class="query_input" v-model="query2" placeholder="Query Language" style="min-width: 50px;" />
          </el-card>
          <div align="center">
            <el-button v-waves @click="addToCart1(dialogID)" type="success" style="width:30%; height:50px;">
              Add to Cart<br />with Query 1
            </el-button>
            <el-button v-waves @click="addToCart2(dialogID)" type="success" style="width:30%; height:50px;">
              Add to Cart<br />with Query 2
            </el-button>
            <el-button v-waves type="danger" class="cancel_button" @click="Cancel" style="width:30%; height:50px;">
              Cancel<br />
              & Close
            </el-button>
          </div>
        </el-dialog>

        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    </div>
</template>

<style>

    .el-col {
        margin-bottom: 20px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        text-align: right;
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

    /* .query_language {
        width: 20%;
        display: block;
    } */

    .selectAndQuery {
        margin-bottom: 20px;
    }

    .query_input_card {
        margin-bottom: 30px;
    }

    .detail_link {
        color: #337ab7;
    }

</style>

<script>
import { fetchList, addtoCart } from '@/api/gallery'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
// import { forEach } from 'mock/user'

export default {
    name: 'gallery_grid',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            total: 0,
            listLoading: true,
            // List: null,
            search: 'Name',
            addToCartTime: null,
            query: null,
            query1: null,
            query2: null,
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
              {id: 1, name: "Dataset", description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", size: "1GB", source: "www.zju.com", date: "2000"},
              {id: 2, name: "Dataset", description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", size: "2GB", source: "www.zju.com", date: "2001"}
            ],
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
                // id: undefined,
                page: 1,
                limit: 10,
                // sort: '+id',
                search: 'name',
                searching_content: undefined
            },
            sortOptions: [
                { label: 'name', key: 'name' },
                { label: 'source', key: 'source' },
                { label: 'size', key: 'size'}
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
            this.query1 = null
            this.query2 = null
            this.columns = []
            this.tableName = null
            console.warn("Attention!")
        },
        directAddToCart(tmpID) {
            // console.warn(tmpID)
            this.query = ""
            var current_time = new Date()
            this.addToCartTime = current_time.getTime()
            // console.warn(this.addToCartTime)
            var tmp_data = new Object() 
            tmp_data.id = tmpID
            tmp_data.query = this.query
            tmp_data.date = this.addToCartTime
            // console.warn(tmp_data)
            addtoCart(tmp_data)
        },
        addToCart1(tmpID) {
            // console.warn(tmpID)
            if ("*" in this.columns) {
                var tmpCol = "*"
            } else {
                var tmpCol = ""
                var cnt = 1
                this.columns.forEach((item) => {
                    if ((cnt !== 1) && (cnt !== this.columns.length)) {
                        tmpCol += ","
                    }
                    tmpCol += item
                    cnt += 1
                })
            }
            var tmpTable = this.tableName
            this.query1 = "SELECT " + tmpCol + " FROM " + tmpTable
            var current_time = new Date()
            this.addToCartTime = current_time.getTime()
            var tmp_data = {
                id: tmpID,
                query: this.query1,
                date: this.addToCartTime
            }
            // console.warn(tmp_data)
            addtoCart(tmp_data)
        },
        addToCart2(tmpID) {
            // console.warn(tmpID)
            var current_time = new Date()
            this.addToCartTime = current_time.getTime()
            var tmp_data = {
                id: tmpID,
                query: this.query2,
                time: this.addToCartTime
            }
            // console.warn(tmp_data)
            addtoCart(tmp_data)
        },
        Cancel() {
            this.dialogVisible = false
            this.deleteDialogID()
        },
        updateAndQuery(tmpID) {
            this.dialogVisible = true
            this.updateDialogID(tmpID)
        },
        searching() {
            this.getList()
        },
        clearSearch() {
            this.listQuery.searching_content = undefined
            this.getList()
        }
    }
}

</script>