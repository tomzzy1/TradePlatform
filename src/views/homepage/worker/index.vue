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
      </el-col> -->
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart :chart-data="pieChartData"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <bar-chart :chart-data="barChartData"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="24">
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
import { fetchListWorker } from '@/api/homepage'

export default {
  name: 'workerHomepage',
  components: {
    GithubCorner,
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
      //   answered: 1,
      //   unanswered: 2,
      //   pieChart: {answered: 3, unanswered: 4},
      //   barchart: [
      //     5, 6, 7, 8, 9, 10, 11
      //   ],
      //   table: [
      //     {dataset: "NBA 2K20", point: 12},
      //     {dataset: "NBA 2K21", point: 13},
      //     {dataset: "NBA 2K22", point: 14},
      //   ]
      // },
      pieChartData: {
        answered: 0,
        unanswered: 0
      },
      barChartData: {
        answeredData: [],
      },
      panelData: {
        answered: 0,
        unanswered: 0,
      },
      tableData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchListWorker().then(response => {
        this.homepageData = response.data.items
        this.barChartData.answeredData = this.homepageData.barchart
        this.panelData.answered = this.homepageData.answered
        this.panelData.unanswered = this.homepageData.unanswered
        this.pieChartData.answered = this.homepageData.pieChart.answered
        this.pieChartData.unanswered = this.homepageData.pieChart.unanswered
        this.tableData = []
        for (let j = 0; j < this.homepageData.table.length; j++) {
          this.tableData.push(this.homepageData.table[j])
        }
        // console.clear()
        // console.warn(this.pieChartData)
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
