<template>
    <div class="app-container">

        <el-card class="database_info">
            <span class="description_header">Column of Missing Data:</span> {{ current_question.pos }}
            <br />
            <span class="description_header">Row of Missing Data:</span> {{ current_question.row_info }}
            <br />
            <span class="description_header">Potential Data:</span> {{ current_question.column_info }}
        </el-card>
        <el-card shadow="hover" class="question_posting">
            <div class="heading">Please type in the question:</div>
            <el-input class="question_input" v-model="question" placeholder="Question"/>
            <div class="heading">Please type in the description of the question:</div>
            <el-input class="question_input" v-model="description" placeholder="Description"/>
            <div class="heading">Please select the number of potential answers:</div>
            <el-select class="answer_number_select" v-model="answer_number" placeholder="Number" @change="updateCorrectAnswerOptions">
                <el-option v-for="item in answerNumberOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <div class="heading">Please type in each potential answers:</div>
            <el-row>
                <el-col :span="24" v-for="i in answer_number" :key="i">
                    <div class="heading">Option {{i}}: </div><el-input class="answer_input" v-model="answers[i-1]" placeholder="Answer"/>
                </el-col>
            </el-row>
            <div class="heading">Please select the correct answer:</div>
            <el-select class="correct_answer_number_select" v-model="correct_answer" placeholder="Option">
                <el-option v-for="item in correctAnswerOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <div class="heading">Please type in the point for this question:</div>
            <el-input class="point_input" v-model="point" placeholder="Point" />
            <div align="center">
                <el-button v-waves type="primary" @click="postOneQuestion">
                    Confirm
                </el-button>
                <el-button v-waves type="success" @click="Submit">
                    Submit All Questions
                </el-button>
                <el-button v-waves type="danger" @click="Cancel"><router-link :to="{path:'/post'}">
                    Cancel
                </router-link></el-button>
            </div>

        </el-card>

        <div class="select_block">
        <!-- <span class="demonstration">Select the Question</span> -->
            <el-pagination
            @current-change="handleCurrentChange"
            layout="prev, pager, next, jumper"
            :page-size="1"
            :total="total_number"
            :current-page.sync="curret_question_number">
            </el-pagination>
        </div>

    </div>
</template>

<style>

    .database_info {
        line-height: 25px;
    }

    .database_info {
        margin-bottom: 20px; 
    }

    .question_input {
        margin-bottom: 20px;
    }

    .answer_number_select {
        width: 100%;
        margin-bottom: 20px;
    } 

    .heading {
        margin-bottom: 10px;
    }

    .answer_input {
        margin-bottom: 20px;
    }

    .correct_answer_number_select {
        width: 100%;
        margin-bottom: 20px;
    }

    .point_input {
        margin-bottom: 20px;
    }

    .select_block {
        margin-top: 30px;
    }

    .demonstration {
        display: block;
        font-display: center;
    }

    .description_header {
        font-weight: bold;
        color: #36a3f7;
    }

</style>

<script>
import { postQuestion, fetchInfo } from '@/api/post_question'

const answerNumberOptions = [
    { key: 2, display_name: '2'},
    { key: 3, display_name: '3'},
    { key: 4, display_name: '4'},
    { key: 5, display_name: '5'},
    { key: 6, display_name: '6'},
]

export default ({
    data() {
        return {
            dataset_id: undefined,
            current_question: {},
            list: null,
            // list: [
            //     { id: 1, pos: "Country", row_info: "Team: Miami Heat, Player: Jimmy Butler, Date: 2021/08/01, Score: 31", column_info: "China, America, Japan" },
            //     { id: 2, pos: "Country", row_info: "Team: Miami Heat, Player: Jimmy Butler, Date: 2021/08/02, Score: 31", column_info: "China, America, Japan" },
            //     { id: 3, pos: "Country", row_info: "Team: Miami Heat, Player: Jimmy Butler, Date: 2021/08/03, Score: 31", column_info: "China, America, Japan" },
            // ],
            question: undefined,
            description: undefined,
            answer_number: undefined,
            answerNumberOptions,
            answers: [],
            correct_answer: undefined,
            point: undefined,
            correctAnswerOptions: undefined,
            listQuery: {
                id: undefined,
                info: undefined
            },
            total_number: 0,
            curret_question_number: 1,
            all_question: []
        }
    },
    beforeCreate() {
        this.$route.meta.title = this.$route.query.name
        let currentView = this.$store.getters.visitedView[this.$store.getters.visitedViews.findIndex((item) => item.path === this.$route.path)]
            if (currentView != null) {
                currentView.title = this.$route.query.name
            }
    },
    created() {
        var query = this.$route.query
        if (query) {
            this.name = query.name
            this.dataset_id = query.id
        }
        this.getInfo()
    },
    methods: {
        updateCorrectAnswerOptions() {
            this.correctAnswerOptions = [
                { key: -1, display_name: 'Answer Unknown'}
            ]
            for (var i = 0; i < this.answer_number; i++)
            {
                this.correctAnswerOptions.push({ key: i, display_name: 'Option ' + (i+1)})
                // answers.push(-1)
            }
        },
        postOneQuestion() {
            var modified_answers = ""
            // console.clear()
            // console.warn(this.answers)
            for (let i = 0; i < this.answers.length; i++) {
                if (i != 0) {
                    modified_answers += ";"
                    modified_answers += this.answers[i]
                } else {
                    modified_answers += this.answers[i]
                }
            }
            var tmpData = {
                id: this.current_question.id,
                question: this.question,
                description: this.description,
                answerNumber: this.answer_number,
                answers: modified_answers,
                correctAnswer: this.correct_answer,
                point: this.point
            }
            if (this.all_question.length > 0) {
                for (let j = 0; j < this.all_question.length; j++) {
                    if (this.all_question[j].id == tmpData.id) {
                        this.all_question.splice(j, 1)
                        break
                    }
                }
            }
            this.all_question.push(tmpData)
            this.question = undefined
            this.description = undefined
            this.answer_number = undefined
            this.answers = []
            this.correct_answer = undefined
            this.point = undefined
            // console.clear()
            // console.warn(this.all_question)
        },
        getInfo() {
            fetchInfo(this.listQuery).then(response => {
                this.list = response.data.items
                this.total_number = this.list.length
                this.current_question = this.list[0]
            })
        },
        handleCurrentChange() {
            this.current_question = this.list[this.curret_question_number - 1]
        },
        Submit() {
            if (this.total_number == this.all_question.length) {
                // console.clear()
                // console.warn(this.all_question)
                postQuestion(this.all_question)
            } else {
                this.$message.error("Please fill in questions for all missing data!")
            }
        },
        Cancel() {
            this.all_question = []
        }
    }
})
</script>
