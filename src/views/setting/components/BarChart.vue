<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000
// const chartData = {
//     nameData: [1, 2, 3, 4],
//     priceData: [100, 120, 161, 134],
//     timeData: [120, 82, 91, 154],
//     param1Data: [180, 160, 151, 106]
// }

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ nameData, timeData, priceData, param1Data} = {}){
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          // data: ['Method 1', 'Method 2', 'Method 3', 'Method 4'],
          data: nameData,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'Time',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: timeData,
          animationDuration
        }, {
          name: 'Price',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: priceData,
          animationDuration
        }, {
          name: 'Param 1',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: param1Data,
          animationDuration
        }]
      })
    }
  }
}
</script>
