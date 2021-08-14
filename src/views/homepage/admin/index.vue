<template>
  <div class="homepage-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <!-- <div class="homepage-editor-container">
    <div class=" clearfix">
      <pan-thumb :image="avatar" style="float: left">
        <span v-for="item in roles" :key="item" class="pan-info-roles">{{ item }}</span>
      </pan-thumb>
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">Admin's Homepage</span>
      </div>
    </div>
    </div> -->

    <panel-group :groupData="panelData" />
    <!-- <panel-group v-blind:visits="homepageData.visits" /> -->
    <!-- <panel-group :testString="testString" /> -->
    <!-- <panel-group v-blind:testNumber="testNumber" /> -->

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

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row> -->
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
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import { fetchListAdmin } from '@/api/homepage'

export default {
  name: 'adminHomepage',
  components: {
    // GithubCorner,
    PanThumb,
    PanelGroup,
    LineChart,
    // RaddarChart,
    PieChart,
    BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  data() {
    return {
      // testString: "Test",
      // testNumber: 666,
      homepageData: undefined,
      // homepageData: {
      //   visits: 1,
      //   datasets: 2,
      //   purchases: 3,
      //   shoppings: 4,
      //   strategies: {UP: 5, UCP: 6, QUCA: 7},
      //   barchart: [
      //     {buyer: 8, seller: 9, worker: 10},
      //     {buyer: 11, seller: 12, worker: 13},
      //     {buyer: 14, seller: 15, worker: 16},
      //     {buyer: 17, seller: 18, worker: 19},
      //     {buyer: 20, seller: 21, worker: 22},
      //     {buyer: 23, seller: 24, worker: 25},
      //     {buyer: 26, seller: 27, worker: 28}
      //   ]
      // },
      barChartData: {
        buyerData: [],
        sellerData: [],
        workerData: []
      },
      pieChartData: {
        UP: 0,
        UCP: 0,
        QUCA: 0
      },
      panelData: {
        visits: 0,
        datasets: 0,
        purchases: 0,
        shoppings: 0,
      }
    }
  },
  created() {
      this.getList()
  },
  methods: {
    getList() {
      fetchListAdmin().then(response => {
        this.homepageData = response.data.items
        // console.clear()
        // console.warn(this.barChartData)
        this.barChartData = {
          buyerData: [],
          sellerData: [],
          workerData: []
        }
        for (let i = 0; i < this.homepageData.barchart.length; i++) {
          this.barChartData.buyerData.push(this.homepageData.barchart[i].buyer)
          this.barChartData.sellerData.push(this.homepageData.barchart[i].seller)
          this.barChartData.workerData.push(this.homepageData.barchart[i].worker)
        }
        this.pieChartData.UP = this.homepageData.strategies.UP
        this.pieChartData.UCP = this.homepageData.strategies.UCP
        this.pieChartData.QUCA = this.homepageData.strategies.QUCA
        this.panelData.visits = this.homepageData.visits
        this.panelData.datasets = this.homepageData.datasets
        this.panelData.purchases = this.homepageData.purchases
        this.panelData.shoppings = this.homepageData.shoppings
        // console.clear()
        // console.warn(this.barChartData)
        // console.clear()
        // console.warn(this.pieChartData)
        // console.clear()
        // console.warn(this.panelData)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .emptyGif {
    display: block;
    width: 45%;
    margin: 0 auto;
  }

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

  .pan-info-roles {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      display: block;
  }

  .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
