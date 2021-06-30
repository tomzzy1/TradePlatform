<template>
    <div class="app-container">
        <div>
        <el-card class="upload_bar" shadow="hover">
            <el-input v-model="time" placeholder="Time" class="time_input" />
            <el-select class="file_type_select" placeholder="File Type">
                <el-option v-for="item in fileTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <el-button @click="addToCart(ID)" type="primary">
                Upload
            </el-button>
        </el-card>
        </div>
        <!-- <hr /> -->
        <div class="notice">
            <span>Please select the type of file and then upload it.</span>
        </div>
    </div>
    
</template>

<style>

    /* .app-container {
        display: table-cell;
        vertical-align: middle;
        transform: translate(50%,180%);
        align-self: center;
        position: fixed;
        margin-left: 30%;
    } */

    .upload_bar {
        float: center;
    }

    .time_input {
        width: 300px;
        margin-right: 10px;
    }

    .file_type_select {
        width: 150px;
        margin-right: 10px;
    }

    .notice {
        font-size: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 20px;
        text-align: center;
    }

</style>

<script>
import { fetchList, updateArticle, fetchPv, addCart, updateCart, deleteCart } from '@/api/article'

const fileTypeOptions = [
    { key: 'CSV_file', display_name: 'CSV' },
    { key: '_file', display_name: '' },
    { key: 'PNG_file', display_name: 'PNG' }
]

export default {
    data() {
        return {
            ID: undefined,
            fileTypeOptions
        }
    },
    methods: {
        addToCart(ID) {
            addCart(ID)
        }
    }
}    

</script>

