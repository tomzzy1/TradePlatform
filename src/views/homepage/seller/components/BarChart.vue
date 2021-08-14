<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

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
    setOptions({ completedData, originalData } = {}){
      this.chart.setOption({
        legend: {
          left: 'center',
          top: 0,
          formatter: function(name) {
            return name
          },
          textStyle: {
            fontSize: 20
          }
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel:{
            textStyle: {
              fontSize: 20
            }
          }
        }],
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'Completed',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: completedData,
          animationDuration
        }, { 
          name: 'Original',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: originalData,
          animationDuration
        }]
      })
    }
  }
}
</script>
