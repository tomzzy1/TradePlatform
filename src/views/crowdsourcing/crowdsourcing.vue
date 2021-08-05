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
                        <div class="bottom clearfix">
                            <router-link :to="{path:'/answer/id/' + item.id ,query:{name:item.name, id:item.id}}" class="detail_link">Answer</router-link>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

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
import { fetchList } from '@/api/crowdsourcing'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'
// import { forEach } from 'mock/user'

export default {
    name: 'crowdsourcing',
    components: { Pagination },
    directives: { waves },
    data() {
        return {
            total: 0,
            listLoading: true,
            List: null,
            search: 'name',
            searching_content: undefined,
            columns: [],
            tableName: null,
            // List: [
            //     {id: 1, name: "Question Set 1", description: "This is a question."},
            //     {id: 1, name: "Question Set 2", description: "This is a question."}
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
                { label: 'name', key: 'name' }
                // { label: 'description', key: 'source' },
            ]
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