<template>
  <el-table :data="list" style="width: 100%;padding-top: 5px;">
    <el-table-column align="center" label="Buyer" min-width="200px">
      <template slot-scope="{row}">
        {{ row.buyer }}
      </template>
    </el-table-column>
    <el-table-column label="Price" min-width="200px" align="center">
      <template slot-scope="{row}">
        ${{ row.price }}
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

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        cancel: 'danger',
        pending: 'warning'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      // return Math.floor(Math.random()*999999)
      return "buyer"
    }
  },
  props: {
    list: Array,
    required: true
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
