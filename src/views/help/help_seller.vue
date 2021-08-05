<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal information, order history and business statistics in the "Homepage"</li> 
                        <li>Uplaod the dataset file along with its associated information in the "Upload" page</li>
                        <li>Browse different datasets which are required to be completed in the "Post" page</li>
                        <li>Post the crowdsourcing questions in the "Post Question" page</li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Homepage</span>
                </template>
                <span class="introduction">
                    Homepage is the page displaying your information, including basic info, business statistics, order history and so on.
                </span>
                
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Upload</span>
                </template>
                <span class="introduction">
                    Upload is the page for you to upload the dataset file with certain type, along with the corresponding information, including "Name", "Base Price", "Source" and "Description".
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Post</span>
                </template>
                <span class="introduction">
                    Detail is the page for you to browse different datasets which are required to be completed.
                <ul>
                    <li>
                        <span class="intro_title_2">Search</span>: Select the attribute for searching, including "name" and "description". Search with the keyword typed in or clear the previous search.
                    </li>
                    <li>
                        <span class="intro_title_2">Post Question</span>: Post crowdsourcing questions for the specific dataset.
                    </li>
                </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Post Question</span>
                </template>
                <span class="introduction">
                    Post question is the page where you post crowdsourcing questions for dataset to be completed.
                <ul>
                    <li>
                        <span class="intro_title_2">Information</span>: There are three types of information from the original dataset to help the seller post appropriate questions, which are "Column of Missing Data", "Row of Missing Data" and "Potential Data".
                            <ul>
                                <li>
                                   <span class="intro_title_2">Column of Missing Data</span>: The column that the missing data belongs to
                                </li>
                                <li>
                                    <span class="intro_title_2">Row of Missing Data</span>: The entire row that the missing data belongs to
                                </li>
                                <li>
                                    <span class="intro_title_2">Potential Data</span>: Potential data options for the missing data based on the nearby data in the same column
                                </li>
                            </ul>     
                    </li>
                    <li>
                        <span class="intro_title_2">Selection</span>: Select each piece of missing data to post the question separately.
                    </li>
                    <li>
                        <span class="intro_title_2">Post Question</span>: Post the question with optional numbers of potential answers, question description, correct answer and point for the question.
                    </li>
                </ul>
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
                        <li>Log out by clicking your profile photo</li>
                        <li>Add the dataset you want into the cart through the "Cart" page</li>
                        <li>Place an order through the "Order" page</li>
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
