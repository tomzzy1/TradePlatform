<template>
    <div class="app-container">
        <el-card class="database_info">
            {{ info }}
        </el-card>
        <el-card shadow="hover" class="question_posting">
            <div class="heading">Please type in the question:</div>
            <el-input class="question_input" v-model="question" placeholder="Question"/>
            <div class="heading">Please select the number of potential answers:</div>
            <el-select class="answer_number_select" v-model="answer_number" placeholder="Number" @change="updateCorrectAnswerOptions">
                <el-option v-for="item in answerNumberOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <div class="heading">Please type in each potential answers:</div>
            <el-row>
                <el-col :span="24" v-for="i in answer_number" :key="i">
                    <div class="heading">Option {{i}}: </div><el-input class="answer_input" v-model="answers[i]" placeholder="Answer"/>
                </el-col>
            </el-row>
            <div class="heading">Please select the correct answer:</div>
            <el-select class="correct_answer_number_select" v-model="correct_answer" placeholder="Option">
                <el-option v-for="item in correctAnswerOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <div class="heading">Please type in the point for this question:</div>
            <el-input class="point_input" v-model="point" placeholder="Point" />
            <div align="center">
                <el-button v-waves type="primary" @click="postTheQuestion">
                    Post Question
                </el-button>
            </div>

        </el-card>
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
            info: "This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data.",
            // info: null,
            question: undefined,
            answer_number: undefined,
            answerNumberOptions,
            answers: [],
            correct_answer: undefined,
            point: undefined,
            correctAnswerOptions: undefined,
            listQuery: {
                ID: undefined,
                info: undefined
            }
        }
    },
    created() {
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
        postTheQuestion() {
            var tmpData = {
                Question: this.question,
                AnswerNumber: this.answer_number,
                Answers: this.answers,
                CorrectAnswer: this.correct_answer,
                Point: this.point
            }
            // postQuestion(tmpData)
        },
        getInfo() {
            // fetchInfo(this.listQuery).then(response => {
            //     this.info = response.info
            // })
        }
    }
})
</script>
