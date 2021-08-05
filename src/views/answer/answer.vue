<template>

    
    <div class="app-container">
        <!-- <span> Hello world! </span> -->
        <el-row>
            <el-col :span="24" v-for="item in list" :key="item">
                <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div>
                        <span class="question">{{ item.question }}</span>
                        <span class="hint">Description: {{ item.description }}</span>
                        <el-radio-group v-model="Answers[item.id]">
                            <div class="options">
                            <el-radio class = "option" v-for="i in (item.answers.length)" :key="i" :label="i">{{ item.answers[i-1] }}</el-radio>
                            </div>
                        </el-radio-group>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-card align="right">
            <el-button @click="Submit" type="primary">Submit</el-button>
            <el-button @click="Cancel" type="danger"><router-link :to="{path:'/crowdsourcing'}">Cancel</router-link></el-button>
        </el-card>
        <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
    </div>
</template>

<style>

    .el-col {
        margin-bottom: 15px;
    }

    .el-card {
        padding-bottom: 5px;
    }

    .question {
        color: #337ab7;
        font-weight: bold;
        font-size: 20px;
        display: block;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-top: 10px;
    }

    .hint {
        font-size: 15px;
        display: block;
        margin-left: 10px;
        margin-bottom: 10px;
        font-style: italic;
    }

    .options {
        display: block;
        margin-left: 20px;
    }

    .option {
        display: block;
        font-size: 25px;
    }
    
</style>

<script>
    import { fetchAnswerList, submitAnswers } from '@/api/crowdsourcing'
    import waves from '@/directive/waves'
    import Pagination from '@/components/Pagination'

    export default {
        name: 'crowdsourcing',
        components: { Pagination },
        directives: { waves },
        data() {
            return {
                // total: 0,
                listLoading: true,
                list: null,
                Answers: {},
                // list: [
                //     {   id: '120',
                //         question: 'Question 1: Please select the correct answer.',
                //         answers: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
                //         correctAnswer: 3,
                //         point: 1 },
                //     {   id: '121',
                //         question: 'Question 2: Please select the correct answer.',
                //         answers: ["This is incorrect.", "This is incorrect.", "This is correct."],
                //         correctAnswer: 3,
                //         point: 1 }]
            //         {   id: '113',
            //             question: 'Question 3: Please select the correct answer.',
            //             answers: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect.", "This is incorrect."],
            //             correctAnswer: 3,
            //             point: 1 },
            //         {   id: '234',
            //             question: 'Question 4:   Please select the correct answer.',
            //             answers: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect.", "This is incorrect.", "This is incorrect."],
            //             correctAnswer: 3,
            //             point: 1 }
            // ]
            //     listQuery: {
            //         page: 1,
            //         limit: 10,
            //         id: undefined
            //     }
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
        },
        methods: {
            getList() {
                this.listLoading = true
                var tmp_id = {id: this.id}
                fetchAnswerList(tmp_id).then(response =>{
                    this.list = response.data.items
                    // console.warn(this.list)
                    for (var i = 0; i < this.list.length; i++)
                    {
                        var tmpList = this.list[i].answers.split(";")
                        // console.warn(tmpList)
                        // this.List[i].answers = new Array()
                        // for (var j = 0; j < tmpList.length; j++){
                        //     this.List[i].answers.push(tmpList[j])
                        // }
                        this.list[i].answers = tmpList
                    }
                    for (var i = 0; i < this.list.answers.length; i++)
                    {
                        var tmp = this.list.id
                        this.Answers.tmp = -1
                    }

                    // simulation for time out
                    setTimeout(() => {
                        this.listLoading = false
                    }, 1.5 * 1000)
                })

            },
            Submit() {
                // console.clear()
                // console.warn(this.Answers)
                var tmpData = []
                for (var key in this.Answers) {
                    tmpData.push({ id: key, answer: this.Answers[key]})
                }
                // console.clear()
                // console.warn(tmpData)
                submitAnswers(tmpData)
            },
            Cancel() {
                this.Answers = {}
            }
        }
    }

</script>