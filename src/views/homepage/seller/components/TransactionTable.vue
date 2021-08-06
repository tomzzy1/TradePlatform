<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column align="center" label="Buyer" min-width="200px">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Price" min-width="200px" align="center">
      <template slot-scope="scope">
        ${{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="200px" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        fail: 'danger',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      // return Math.floor(Math.random()*999999)
      return "buyer"
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
