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

        <!-- <div class="app-grid">
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-light">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple">
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="grid-content bg-purple-dark">
                </div>
            </el-col>
        </el-row>
        </div>
    </div> -->

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
    /* .el-col {
        border-radius: 4px;
        margin-bottom: 20px;
        float: center;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 200px;
        min-width: 200px;
        height: 250px;
        width: 250px;  
    } */

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
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: undefined,
        type: undefined,
        price: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
    //   calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        name: '',
        type: '',
        price: 0,
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        name: [{ required: true, message: 'name is required', trigger: 'blur' }]
      },
      downloadLoading: false
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

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
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
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
