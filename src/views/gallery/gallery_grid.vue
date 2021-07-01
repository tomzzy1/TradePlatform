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
                <el-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4" :span="4" v-for="item in List" :key="item" >
                    <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div>
                        <span class="dataset_name">{{ item.Name }}</span>
                        <br />
                        <span class="dataset_info">{{ item.Description }}</span>
                        <br />
                        <span class="dataset_size">Size: {{ item.Size }}</span>
                        <br />
                        <span class="dataset_source">Source: {{ item.Source }}</span>
                        <br />
                        <span class="dataset_time">Time: {{ item.Time }}</span>
                        <div class="bottom clearfix">
                        <el-button type="text" class="button" @click="dialogVisible = true, updataDialogID">Query</el-button>
                        </div>
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
          <span class="notice">Please type in the corret query.</span>
          <el-input class="query_input" v-model="this.query" placeholder="Query Language" style="min-width: 50px;" />
          <div align="center">
            <el-button v-waves @click="addToCart(dialogID)" type="success" style="width:150px;">
              Add to Cart
            </el-button>
            <el-button v-waves type = "danger" @click="dialogVisible = false, deleteDialogID" style="width:150px; text-align:center;">
              Cancel
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
    }

    .query_input {
      margin-top: 10px;
      margin-bottom: 50px;
    }

</style>

<script>
import { fetchList } from '@/api/gallery'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
    name: 'gallery_grid',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            total: 0,
            listLoading: true,
            List: null,
            // List: [
            //   {ID: 1, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "1GB", Source: "www.zju.com", Time: "2000"},
            //   {ID: 2, Name: "Dataset", Description: "This is a DataSet. This is a DataSet. This is a DataSet. This is a DataSet.This is a DataSet. This is a DataSet. This is a DataSet.", Size: "2GB", Source: "www.zju.com", Time: "2001"},
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
                ID: undefined,
                page: 1,
                limit: 6,
                sort: '+id',
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
        addToCart(id) {
            var tmpID = id
            if (id != null)
            {
                addtoCart(tmpID)
            }
        },
        updateDialogID(id) {
            this.dialogID = id
        },
        deleteDialogID(id) {
            this.dialogID = null
        }
    }
}

</script>