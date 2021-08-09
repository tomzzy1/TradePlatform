<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal information and history answering in the "Homepage"</li> 
                        <li>Browse different dataset with crowdsourcing questions through the "Crowdsourcing" page</li>
                        <li>Answer the questions for the specific dataset through the "Answer" page</li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Homepage</span>
                </template>
                <span class="introduction">
                    Homepage is the page displaying your information, including history answering information.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Crowdsourcing</span>
                </template>
                <span class="introduction">
                    Crowdsourcing is the page where you can browse different datasets with crowdsourcing questions.
                <ul>
                    <li>
                        <span class="intro_title_2">Search</span>: Select the attribute for searching, including "name" and "question". Search with the keyword typed in or clear the previous search
                    </li>
                    <li>
                        <span class="intro_title_2">Answer</span>: Answer the crowdsourcing questions posted by the seller for the dataset.
                    </li>
                </ul>
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Answer</span>
                </template>
                <span class="introduction">
                    Answer the crowdsourcing questions posted by the seller for the specific dataset.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">Help</span>
                </template>
                <span class="introduction">
                    Help is the page where you can seek for help about the functionalities and methods to use the platform. It is classified based on functionalities of different sub-pages.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Others</span>
                </template>
                <span class="introduction">
                    <span class="intro_title_3">Top Bar Features</span>
                    <ul>
                        <li>Search for the page by its name</li>
                        <li>Display the page in full screen mode</li>
                        <li>Log out by clicking your profile photo</li>
                    </ul>
                    <span class="intro_title_3">Settings</span>
                    <ul>
                        <li>Open the tag view or not</li>
                        <li>Fix the header or not</li>
                        <li>Display the sidebar logo or not</li>
                    </ul>
                </span>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style>

    .intro_title {
        font-family: 'Times New Roman';
        font-size: 20px;
        font-weight: bold;
        display: block;
        margin-left: 10px;
        color: #337ab7;
    }

    .intro_title_2 {
        font-family: sans-serif;
        font-size: 15px;
        font-weight: bold;
    }

    .intro_title_3 {
        display: block;
        font-family: sans-serif;
        font-size: 15px;
        font-weight: bold;
        margin-top: 10px;
    }

    .introduction {
        display: block;
        font-family: sans-serif;
        font-size: 15px;
        font-weight: normal;
        margin-left: 20px;
    }

</style>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>
