<template>
  <el-table :data="list" style="width: 100%;padding-top: 5px; font-size:20px;">
    <el-table-column align="center" label="Dataset" min-width="200px">
      <template slot-scope="{row}">
        {{ row.dataset }}
      </template>
    </el-table-column>
    <el-table-column label="Price" min-width="200px" align="center">
      <template slot-scope="{row}">
        ${{ row.price }}
      </template>
    </el-table-column>
    <el-table-column label="Query" width="200px" align="center">
      <template slot-scope="{row}">
          {{ row.query }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  filters: {
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
