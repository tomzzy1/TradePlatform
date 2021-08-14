<template>
    <div class="app-container">
        <div>
        <span class="tip">
            Please select the file of dataset and set up the base price as you wish.
        </span>
        <el-card class="upload_bar" shadow="hover">
            <!-- <el-input v-model="time" placeholder="Time" class="time_input" /> -->
            <!-- <div class="heading">Date: </div>
            <el-date-picker
                class="date_picker"
                v-model="params.time"
                type="date"
                placeholder="Please select the data"
            >
            </el-date-picker> -->
            <div class="heading">Name: </div><el-input class="base_price_input" v-model="params.name" placeholder="Name"  />
            <div class="heading">Base Price: </div><el-input class="base_price_input" v-model="params.base_price" placeholder="Base Price"  />
            <div class="heading">Source: </div><el-input class="base_price_input" v-model="params.source" placeholder="Source"  />
            <div class="heading">Description: </div><el-input class="base_price_input" v-model="params.description" placeholder="Description"  />
            <!-- <div class="heading">Price Coefficient: </div><el-input class="price_coefficient_input" v-model="params.price_coefficient" placeholder="Price Coefficient" />
            <br />
            <div class="heading">Sensitivity Degree: </div><el-input class="sensitivity_degree_input" v-model="params.sensitivity_degree" placeholder="Sensitivity Degree" />
            <br /> -->
            <div class="heading">File Type: </div><el-select v-model="fileType" class="file_type_select" placeholder="File Type" style="font-size:20px;">
                <el-option v-for="item in fileTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" style="font-size:20px;"/>
            </el-select>
            <br />
            <div align="center">
            <el-upload
                class="upload-file"
                action="#"
                :limit="10"
                multiple
                :file-list="fileList"
                :http-request="uploadHttpRequest"
                :auto-upload="false"
                :before-upload="beforeUpload"
                :on-change="onChange"
                :on-success="uploadSuccess">
                <el-button slot="trigger" type="primary" class="el-upload_button">Select File</el-button>
                <!-- <el-button class="upload_button" type="success" @click="submitUpload">Upload</el-button> -->
                <el-button class="upload_button" type="success" @click="uploadFile">Upload</el-button>
                <div slot="tip" class="el-upload_tip">Make sure to upload the certain type of file.</div>
                <!-- <el-button @click="testRequest">
                    Test
                </el-button> -->
            </el-upload>
            <!-- <el-button v-waves @click="uploadData" type="success">
                    Upload
                </el-button> -->
            </div>
            <!-- <div align="center">
                <el-button v-waves @click="selectFile" type="primary">
                    Select File
                </el-button> 
                <el-button v-waves @click="uploadFile" type="success">
                    Upload
                </el-button>
            </div> -->
           
        </el-card>
        </div>
        <!-- <hr /> -->
        <!-- <div class="notice">
            <span>Please upload the file with appropriate type.</span>
        </div> -->
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
        font-size: 20px;
    }

    .notice {
        font-size: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 20px;
        text-align: center;
    }

    .base_price_input {
        min-width: 100px;
        margin-bottom: 20px;
        /* margin-right: 5px; */
        font-size: 20px;
    }

    .price_coefficient_input {
        min-width: 100px;
        /* margin-right: 5px; */
        margin-bottom: 20px;
        font-size: 20px;
    }

    .sensitivity_degree_input {
        min-width: 100px;
        /* margin-right: 5px; */
        margin-bottom: 20px;
        font-size: 20px;
    }

    .el-button {
        width: 150px;
        font-size: 20px;
    }

    .heading {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .date_picker {
        width: 100%;
        margin-bottom: 20px;
    }

    .el-upload_button {
        margin-right: 10px;
    }

    .el-upload_tip {
        margin-bottom: 15px;
        margin-top: 10px;
        font-style: italic;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    .tip {
        display: block;
        margin-bottom: 10px;
        font-style: italic;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

</style>

<script>
import { upload_data } from '@/api/upload_item'
// import { description } from 'plop-templates/view/prompt'

const fileTypeOptions = [
    { key: 'csv', display_name: 'CSV' },
    { key: 'txt', display_name: 'TXT' },
    { key: 'zip', display_name: 'ZIP' }
]

export default {
    data() {
        return {
            fileTypeOptions,
            fileType: undefined,
            tmp_size: 0,
            params: 
            {
                // ID: undefined,
                // time: undefined,
                // fileTypeOptions,
                name: undefined,
                base_price: undefined,
                // price_coefficient: undefined,
                // sensitivity_degree: undefined,
                description: undefined,
                source: undefined,
                size: undefined
                // fileType: undefined
            },
            fileList: []
        }
    },
    methods: {
        uploadFile() {
            const formData = new FormData()
            // console.warn("This is the fileList before formData.")
            // console.warn(this.fileList)
            if (this.fileList) {
                this.fileList.forEach((file, index) => {
                    formData.append(index, file.raw, file.raw.name)
                })
            }
            console.log(this.params)
            formData.append('params', JSON.stringify(this.params))
            // console.warn("+++++ This is the data posted to the database +++++")
            upload_data(formData)
            this.$message.success("Upload Successfully")
        },
        // submitUpload() {
        //     // this.$refs.upload.submit()
        //     this.uploadData()
        // },
        uploadHttpRequest(data) {
            /*let reader = new FileReader()
            let that = this
            reader.readAsText(data.file)
            reader.onload = function() {
                that.formData.mmiapXml = this.result
            }*/
        },
        beforeUpload(file) {
            // const isCorrect = file.type == this.fileType
            // if(!isCorrect){
            //     this.$message.error('Please upload the correct type of file!')
            //     return false
            // }
            // console.clear()
            // console.warn(this.fileType)
            // var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
            // console.warn(testmsg)
            // const extension = testmsg === this.fileType
            // if (!extension) {
            //     this.$message.error("Please upload the correct type of file!")
            //     console.warn("Error")
            // }
            // return false
        },
        uploadSuccess(res, file, fileList) {
            if (res.code == '200') {
                this.$message.success("Upload Successfully")
            } else {
                this.$message.error("Upload Failed")
            }
        },
        onChange(file, fileList) {
            // console.warn('file list changed')
            console.log(fileList)
            let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name)
　　         if (existFile) {
                this.$message.error('current file has been existed!')
                fileList.pop()
　　         }
            // console.clear()
            // console.warn(this.fileType)
            var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
            console.warn(testmsg)
            const extension = testmsg === this.fileType
            if (!extension) {
                this.$message.error("Please upload the correct type of file!")
                console.warn("Error")
                fileList.pop()
            } else {
                this.fileList = fileList
                this.tmp_size += file.size
                this.params.size = this.tmp_size
                // console.warn(this.params.size)
            }
        },
        testRequest() {
            // var tmpParams = {
            //     Time: this.time,
            //     BasePrice: this.base_price,
            //     PriceCoefficient: this.price_coefficient,
            //     SensitivityDegree: this.sensitivity_degree,
            //     FileType: this.fileType
            //     }
            // var tmpData = [
            //     this.fileList,
            //     tmpParams
            // ]
            // upload_data(tmpData)
            this.submitUpload()
        },
        testFileTypeChange() {
            console.clear()
            console.warn(this.fileType)
        }
    }
}    

</script>

