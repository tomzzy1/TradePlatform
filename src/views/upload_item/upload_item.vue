<template>
    <div class="app-container">
        <el-input v-model = "ID" placeholder="ID" class="id_input" />
        <el-button @click="addToCart(ID)" type="primary">
            Upload
        </el-button>
    </div>
</template>

<style>

    .id_input {
        width: 300px;
        margin-right: 10px;
    }

</style>

<script>
import { fetchList, updateArticle, fetchPv, addCart, updateCart, deleteCart } from '@/api/article'

export default {
    data() {
        return {
            ID: undefined
        }
    },
    methods: {
        addToCart(ID) {
            addCart(ID)
        }
    }
}    

</script>

