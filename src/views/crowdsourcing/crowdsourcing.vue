<template>

    
    <div class="app-container">
        <!-- <span> Hello world! </span> -->
        <el-row>
            <el-col :span="24" v-for="item in list" :key="item">
                <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div>
                        <span class="question">{{ item.question }}</span>
                        <span class="hint">Hint: {{ item.hint }}</span>
                        <el-radio-group v-model=" Answers[item.ID]">
                            <div class="options">
                            <el-radio class = "option" v-for="i in (item.answer.length)" :key="i" :label="i">{{ item.answer[i-1] }}</el-radio>
                            </div>
                        </el-radio-group>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
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
    import { fetchList } from '@/api/crowdsourcing'
    import waves from '@/directive/waves'
    import Pagination from '@/components/Pagination'

    export default {
        name: 'crowdsourcing',
        components: { Pagination },
        directives: { waves },
        data() {
            return {
                total: 0,
                listLoading: true,
                // list: null,
                Answers: {},
                list: null,
                // list: [
                //     {   ID: 1,
                //         question: 'Question 1: Please select the correct answer.',
                //         answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
                //         correct_answer: 3,
                //         point: 1 }],
            //         {   ID: 2,
            //             question: 'Question 2: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 3,
            //             question: 'Question 3: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 4,
            //             question: 'Question 4:   Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect.", "This is incorrect.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 5,
            //             question: 'Question 5: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 6,
            //             question: 'Question 6: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 7,
            //             question: 'Question 7: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 8,
            //             question: 'Question 8: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 9,
            //             question: 'Question 9: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 10,
            //             question: 'Question 10: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 11,
            //             question: 'Question 11: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 12,
            //             question: 'Question 12: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 13,
            //             question: 'Question 13: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 14,
            //             question: 'Question 14: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 },
            //         {   ID: 15,
            //             question: 'Question 15: Please select the correct answer.',
            //             answer: ["This is incorrect.", "This is incorrect.", "This is correct.", "This is incorrect."],
            //             correct_answer: 3,
            //             point: 1 }
            // ],
                listQuery: {
                    page: 1,
                    limit: 10
                }
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                fetchList(this.listQuery).then(response =>{
                    this.list = response.data.items
                    this.total = response.data.total
                    // console.warn(this.list)
                    for (var i = 0; i < this.list.length; i++)
                    {
                        var tmpList = this.list[i].answer.split(";")
                        // console.warn(tmpList)
                        // this.List[i].answer = new Array()
                        // for (var j = 0; j < tmpList.length; j++){
                        //     this.List[i].answer.push(tmpList[j])
                        // }
                        this.list[i].answer = tmpList
                    }

                    // simulation for time out
                    setTimeout(() => {
                        this.listLoading = false
                    }, 1.5 * 1000)
                })

                // for (var i = 0; i < this.list.answer.length; i++)
                // {
                //     var tmp = this.list.ID
                //     this.Answers.tmp = -1
                // }
            }
        }
    }

</script>