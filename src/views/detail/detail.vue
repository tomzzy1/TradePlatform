<template>
    <div class="app-container">
        <!-- This is the stupid {{name}}! -->
        <span class="header">{{ this.name }}</span>
        <el-card class="description_class">
            {{ description }}
        </el-card>
        <el-card class="operation_area">
            <span class="tip">
                You can either select the query language or type it in by yourself. Be sure the query is correct.
            </span>
            <span class="steps">
                Now select one of the tables from the dataset.
            </span>
            <el-select clearable class="selection" v-model="table_name" placeholder="Name of Table" @change="clearColumnCondition">
                <el-option
                    v-for="item in table_list"
                    :value="item"
                    :key="item">
                </el-option>
            </el-select>
            <span class="steps">
                Then select the column from the table.
            </span>
            <el-select clearable class="selection" v-model="column_name" placeholder="Name of Column" @change="clearCondition">
                <el-option
                    v-for="item in column_list[table_name]"
                    :value="item"
                    :key="item">
                </el-option>
            </el-select>
            <span class="steps">
                Then select the condition.
            </span>
            <!-- <el-button @click="Test">Test</el-button> -->
            <el-select clearable class="selection" v-model="condition" placeholder="Condition" @change="getQuery">
                <el-option
                    v-for="item in conditions[type_list[table_name][column_name]]"
                    :value="item"
                    :key="item">
                </el-option>
            </el-select>
        </el-card>
        <el-card>
            <el-input class="query_input" v-model="query" placeholder="Query"/>
            <div align="center">
            <!-- <el-button class="button" type="primary" @click="addToCart1(id)">Add Entire Dataset to Cart</el-button>
            <el-button class="button" type="primary" @click="addToCart2(id)">Add Dataset with Query</el-button>
            <el-button class="button" type="danger" @click="cancel">Cancel</el-button>
            </div> -->
            <el-button class="button" type="primary" ><router-link :to="{path:'/cart'}">Add Entire Dataset to Cart</router-link></el-button>
            <el-button class="button" type="primary"><router-link :to="{path:'/cart'}">Add Dataset with Query</router-link></el-button>
            <el-button class="button" type="danger" ><router-link :to="{path:'/gallery/gallery_table'}">Cancel</router-link></el-button>
            </div>
        </el-card>
        

    </div>
</template>

<style>

    .header {
        font-family: Times;
        font-size: 30px;
        display: block;
        margin-bottom: 20px;
    }

    .description_class {
        font-family: sans-serif;
        margin-bottom: 15px;
        line-height: 27px;
    }

    .operation_area {
        margin-bottom: 15px;
    }

    .tip {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        font-style: italic;
        display: block;
        margin-bottom: 15px;
    }

    .steps {
        font-family: Times;
        font-size: 20px;
        display: block;
        margin-bottom: 10px;
    }

    .selection {
        margin-bottom: 10px;
    }

    .query_input {
        margin-bottom: 10px;
    }

    .button {
        width: 32%;
        height: 40px;
    }

</style>

<script>
import { fetchList, addToCart } from '@/api/detail'
import waves from '@/directive/waves'

export default {
    data() {
        return {
            name: "Hello",
            id: undefined,
            // description: undefined,
            // table_info: undefined,
            description: "The information of the dataset: Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.Though wise men at their end know dark is right, Because their words had forked no lightning they Do not go gentle into that good night. Good men, the last wave by, crying how bright Their frail deeds might have danced in a green bay, Rage, rage against the dying of the light. Wild men who caught and sang the sun in flight, And learn, too late, they grieved it on its way, Do not go gentle into that good night. Grave men, near death, who see with blinding sight Blind eyes could blaze like meteors and be gay, Rage, rage against the dying of the light. And you, my father, there on the sad height, Curse, bless me now with your fierce tears, I pray. Do not go gentle into that good night. Rage, rage against the dying of the light.",
            table_info: [
                {columns: ["Column A", "Column B", "Column C"], table: "Table 1", types: ["number", "number", "string"]},
                {columns: ["Column D", "Column E", "Column F"], table: "Table 2", types: ["string", "number", "number"]},
                {columns: ["Column G", "Column H", "Column I"], table: "Table 3", types: ["string", "number", "number"]}   
            ],
            table_list: [],
            column_list: {},
            type_list: {},
            table_name: {},
            column_name: {},
            condition: undefined,
            conditions: {
                "number": [">21", "<21"],
                "string": ["='apple'", "='banana'"]
            },
            query: undefined
            // number_condition: [">21", "<21"],
            // string_condition: ["='apple'", "='banana'"]
        }
    },
    beforeCreate() {
        this.$route.meta.title = this.$route.query.name
        let currentView = this.$store.getters.visitedViews[this.$store.getters.visitedViews.findIndex((item) => item.path === this.$route.path)]
        if (currentView != null) {
            currentView.title = this.$route.query.name
        }
    },
    created() {
        var query = this.$route.query
        if (query) {
            this.name = query.name
            this.id = query.id
        }
        this.getList()
        // console.warn(this.column_list)
    },
    methods: {
        getList() {
            // fetchList(this.id).then(response => {
            //     this.description = response.description
            //     this.table_info = response.table_info
            // })
            this.table_info.forEach(element => this.table_list.push(element.table))
            // console.warn(this.table_list)
            this.table_info.forEach(element => {
                // var tmp_name = element.table
                // console.warn(tmp_name)
                this.column_list[element.table] = element.columns
                // console.warn(this.column_list)
                this.type_list[element.table] = {}
                for (let i = 0; i < element.columns.length; i++){
                    this.type_list[element.table][element.columns[i]] = element.types[i]
                }
            })
            this.table_name = this.table_list[0]
            this.column_name = this.column_list[this.table_name][0]
            // console.warn(this.table_list)
            // console.warn(this.column_list)
            console.warn(this.type_list)
        },
        Test() {
            console.warn(this.conditions[this.type_list[this.table_name][this.column_name]])
            // console.warn(this.table_name)
            // console.warn(this.column_name)
        },
        clearColumnCondition() {
            this.column_name = undefined
            this.condition = undefined
        },
        clearCondition() {
            this.condition = undefined
        },
        getQuery() {
            this.query = "SELECT " + this.column_name + " FROM " + this.table_name + " WHERE " + this.column_name + this.condition
        },
        addToCart1(tmpID) {
            var tmpQuery = ""
            var tmpData = { id: tmpID, query: tmpQuery }
            // addToCart(tmpData)
        },
        addToCart2(tmpID) {
            var tmpQuery = this.query
            var tmpData = { id: tmpID, query: tmpQuery }
            // addToCart(tmpData)
        }
    }
}
</script>
