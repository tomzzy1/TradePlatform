<template>
    <div class="app-container">
        <div>
        <el-card class="upload_bar" shadow="hover">
            <!-- <el-input v-model="time" placeholder="Time" class="time_input" /> -->
            <div class="heading">Date: </div>
            <el-date-picker
                class="date_picker"
                v-model="params.time"
                type="date"
                placeholder="Please select the data"
            >
            </el-date-picker>
            <div class="heading">Base Price: </div><el-input class="base_price_input" v-model="params.base_price" placeholder="Base Price"  />
            <br />
            <div class="heading">Price Coefficient: </div><el-input class="price_coefficient_input" v-model="params.price_coefficient" placeholder="Price Coefficient" />
            <br />
            <div class="heading">Sensitivity Degree: </div><el-input class="sensitivity_degree_input" v-model="params.sensitivity_degree" placeholder="Sensitivity Degree" />
            <br />
            <!--div class="heading">File Type: </div><el-select v-model="fileType" class="file_type_select" placeholder="File Type">
                <el-option v-for="item in fileTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />-->
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
                <div slot="tip" class="el-upload_tip">Please upload the certain type of file.</div>
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

    .el-upload_button {
        margin-right: 10px;
    }

    .el-upload_tip {
        margin-bottom: 15px;
        margin-top: 10px;
    }

</style>

<script>
import { upload_data } from '@/api/upload_item'

const fileTypeOptions = [
    { key: 'CSV_file', display_name: 'CSV' },
    { key: 'TXT_file', display_name: 'TXT' },
    { key: 'PNG_file', display_name: 'PNG' }
]

export default {
    data() {
        return {
            params: 
            {
                ID: undefined,
                time: undefined,
                //fileTypeOptions,
                base_price: undefined,
                price_coefficient: undefined,
                sensitivity_degree: undefined//,
                //fileType: undefined
            },
            fileList: []
        }
    },
    methods: {
        uploadFile() {
            const formData = new FormData()
            console.warn("This is the fileList before formData.")
            console.warn(this.fileList)
            if (this.fileList) {
                this.fileList.forEach((file, index) => {
                    formData.append(index, file.raw, file.raw.name)
                })
            }
            console.log(this.params)
            formData.append('params', JSON.stringify(this.params))
            console.warn("+++++ This is the data posted to the database +++++")
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
            const isCorrect = file.type == this.fileType
            if(!isCorrect){
                this.$message.error('Please upload the correct type of file!')
                return false
            }
        },
        uploadSuccess(res, file, fileList) {
            if (res.code == '200') {
                this.$message.success("Upload Successfully")
            } else {
                this.$message.error("Upload Failed")
            }
        },
        onChange(file, fileList) {
            console.warn('file list changed')
            console.log(fileList)
            let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name)
　　         if (existFile) {
　　　　        this.$message.error('current file has been existed!')
　　　　        fileList.pop()
　　        }
　　        this.fileList = fileList
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
        }
    }
}    

</script>

