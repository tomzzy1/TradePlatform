<template>
    <div class="app-container">
        <div>
        <el-card class="upload_bar" shadow="hover">
            <!-- <el-input v-model="time" placeholder="Time" class="time_input" /> -->
            <div class="heading">Date: </div>
            <el-date-picker
                class="date_picker"
                v-model="time"
                type="date"
                placeholder="Please select the data"
            >
            </el-date-picker>
            <div class="heading">Base Price: </div><el-input class="base_price_input" v-model="base_price" placeholder="Base Price"  />
            <br />
            <div class="heading">Price Coefficient: </div><el-input class="price_coefficient_input" v-model="price_coefficient" placeholder="Price Coefficient" />
            <br />
            <div class="heading">Sensitivity Degree: </div><el-input class="sensitivity_degree_input" v-model="sensitivity_degree" placeholder="Sensitivity Degree" />
            <br />
            <div class="heading">File Type: </div><el-select v-model="fileType" class="file_type_select" placeholder="File Type">
                <el-option v-for="item in fileTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <br />
            <div align="center">
                <el-button v-waves @click="selectFile" type="primary">
                    Select File
                </el-button> 
                <el-button v-waves @click="uploadFile" type="success">
                    Upload
                </el-button>
            </div>
           
        </el-card>
        </div>
        <!-- <hr /> -->
        <div class="notice">
            <span>Please upload the file with appropriate type.</span>
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
        margin-bottom: 10px;
        /* margin-right: 10px; */
    }

    .file_type_select {
        width: 100%;
        margin-bottom: 30px;
        /* margin-right: 20px; */
    }

    .notice {
        font-size: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 20px;
        text-align: center;
    }

    .base_price_input {
        min-width: 100px;
        margin-bottom: 20px;
        /* margin-right: 5px; */
    }

    .price_coefficient_input {
        min-width: 100px;
        /* margin-right: 5px; */
        margin-bottom: 20px;
    }

    .sensitivity_degree_input {
        min-width: 100px;
        /* margin-right: 5px; */
        margin-bottom: 20px;
    }

    .el-button {
        width: 150px;
    }

    .heading {
        margin-bottom: 10px;
    }

    .date_picker {
        width: 100%;
        margin-bottom: 20px;
    }

</style>

<script>
import { uploadItem } from '@/api/upload_item'

const fileTypeOptions = [
    { key: 'CSV_file', display_name: 'CSV' },
    { key: 'TXT_file', display_name: 'TXT' },
    { key: 'PNG_file', display_name: 'PNG' }
]

export default {
    data() {
        return {
            ID: undefined,
            time: undefined,
            fileTypeOptions,
            base_price: undefined,
            price_coefficient: undefined,
            sensitivity_degree: undefined,
            fileType: undefined
        }
    },
    methods: {
        selectFile() {

        },
        uploadFile() {

        }
    }
}    

</script>

