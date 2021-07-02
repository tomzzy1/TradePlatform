<template>
    <div class="app-container">
        <el-card class="database_info">
            {{ info }}
        </el-card>
        <el-card class="question_posting">
            <div class="heading">Please type in the question:</div>
            <el-input class="question_input" v-model="question" placeholder="Question"/>
            <div class="heading">Please select the number of potential answers:</div>
            <el-select class="answer_number_select" v-model="answer_number" placeholder="Number">
                <el-option v-for="item in answerNumberOptions" :key="item.key" :label="item.display_name" :value="item.key" />
            </el-select>
            <div class="heading">Please type in each potential answers:</div>
            <el-row>
            </el-row>

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

</style>

<script>
import { postQuestion } from '@/api/post_question'

const answerNumberOptions = [
    { key: 'two', display_name: '2'},
    { key: 'three', display_name: '3'},
    { key: 'four', display_name: '4'},
    { key: 'five', display_name: '5'},
    { key: 'six', display_name: '6'},
]

export default ({
    data() {
        return {
            info: "This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data. This is the information of missing data.",
            question: undefined,
            answer_number: undefined,
            answerNumberOptions,
            answers: undefined,
            correct_answer: undefined,
            point: undefined
        }
    },
})
</script>
