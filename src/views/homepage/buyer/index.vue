<template>
  <div class="homepage-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <panel-group :groupData="panelData" />

    <!-- <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row> -->

    <el-row :gutter="32">
      <!-- <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col> -->
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="chart-wrapper">
          <bar-chart :chart-data="barChartData"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table :list="tableData"/>
      </el-col>
      <!-- <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import { fetchListBuyer } from '@/api/homepage'

export default {
  name: 'buyerHomepage',
  components: {
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      homepageData: undefined,
      // homepageData: {
      //   visits: 1,
      //   orders: 2,
      //   barchart: [
      //     {visited: 3, ordered: 4},
      //     {visited: 5, ordered: 6},
      //     {visited: 7, ordered: 8},
      //     {visited: 9, ordered: 10},
      //     {visited: 11, ordered: 12},
      //     {visited: 13, ordered: 14},
      //     {visited: 15, ordered: 16},
      //   ],
      //   table: [
      //     {dataset: "NBA 2K20", price: 17, status: 0},
      //     {dataset: "NBA 2K21", price: 18, status: 1},
      //     {dataset: "NBA 2K22", price: 19, status: 2},
      //   ]
      // },
      barChartData: {
        visitedData: [],
        orderedData: []
      },
      panelData: {
        visits: 0,
        orders: 0
      },
      tableData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchListBuyer().then(response => {
        this.homepageData = response.data.items
        this.barChartData = {
          visitedData: [],
          orderedData: []
        }
        for (let i = 0; i < this.homepageData.barchart.length; i++) {
          this.barChartData.visitedData.push(this.homepageData.barchart[i].visited)
          this.barChartData.orderedData.push(this.homepageData.barchart[i].ordered)
        }
        this.panelData.visits = this.homepageData.visits
        this.panelData.orders = this.homepageData.orders
        this.tableData = []
        for (let j = 0; j < this.homepageData.table.length; j++) {
          this.tableData.push(this.homepageData.table[j])
          if (this.homepageData.table[j].status == 0) {
            this.tableData[j].status = 'pending'
          } else if (this.homepageData.table[j].status == 1) {
            this.tableData[j].status = 'cancel'
          } else if (this.homepageData.table[j].status == 2) {
            this.tableData[j].status = 'success'
          }
        }
        // console.clear()
        // console.warn(this.barChartData)
        // console.warn(this.panelData)
        // console.warn(this.tableData)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .homepage-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
