<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    The data query and trading platform is a platform for upload, demonstrate, browse, trade, and optimize the datasets. There are designate functions for four types of people with different purposes, including the seller, buyer, worker, and platform administrator. 
                    <ul>
                        <li>The sellers are the one that would like to upload his datasets to the platform for trading to obtain the revenue. He can upload the dataset and set the basic price as he wants. In addition, he can choose to employ the workers in the platform to optimize his dataset for higher revenue, as the data quality plays an important role when trading data.</li> 
                        <li>The buyers are the one interested in the datasets on the platform. He can browse the information of datasets and choose different ways of placing an order. In particular, he can buy the whole dataset or obtain the subset of one dataset through the <span class="emphasize">SQL query</span>. He can also post the requirements on the data quality to inform sellers optimize their datasets.</li>
                        <li>The platform administrator is the one administrates the platform. He can check out the business statistics of the platform. He can also browse all the datasets uploaded by the seller. In particular, he can set up the price coefficient and sensitivity degree for the datasets uploaded by the seller. In addition, he can select the pricing algorithm for the datasets uploaded by the seller based on different time and price with different algorithms.</li>
                        <li>The worker is the one who comes to the platform to answer the questions for optimizing the datasets of the platform to get paid. He can browse different datasets which are required to optimize. In particular, he can answer the crowdsourcing questions posted by the seller to accelerate the development of the platform.</li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">What can I do in the platform as an admin?</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check out business statistics</li>
                        <li>Browse uploaded datasets</li>
                        <li>Manage pricing parameters</li>
                        <li>Choose pricing strategy</li>
                    </ul>
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to check out the business statistics as an admin?</span>
                </template>
                <span class="introduction">
                    In the “Homepage”, you can check out the business statistics of the platform. You can find out the numbers of visits, datasets, orders, and shopping carts since the platform is online in the panel on the top of the page. The comparison between number of datasets with different pricing strategies is shown in the sector graph blow. In addition, you can check out the visit numbers of different users in a week in the bar chart in the bottom of the page. For more detailed information, you can hover the cursor over the graph.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">How to browse and search for a specific dataset uploaded by the seller?</span>
                </template>
                <span class="introduction">
                    The basic information of uploaded datasets is listed in the “Setting” page, including the “Name”, “Description”, “Date”, “Size”, and “Source” of the dataset. You can also filter the required datasets in the search bar. Specifically, one can search the datasets with keywords while restricting the “Name”, “Source” or “Size”. Use “Clear” button to clear all previous searching results.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to set up the parameters for a dataset?</span>
                </template>
                <span class="introduction">
                    In the “Setting” page, click the “Set Parameters” on the dataset you want. Then type in the "Price Coefficient" and "Sensitivity Degree" in the box, which are both limited as numbers from 0 to 1.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to select different pricing strategies based on corresponding statistic?</span>
                </template>
                <span class="introduction">
                    After submitting the "Price Coefficient" and "Sensitivity Degree", type in a piece of valid <span class="emphasize">SQL query</span>, and you will get the information of the three different pricing strategies, including “UP”, “UCP” and “QUCA”, as well as the prices and time of the dataset according to their algorithms. Then, based on this information, you can select the strategy you want.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to adjust the view of the page?</span>
                </template>
                <span class="introduction">
                    In the top bar, you can search for the page by its name, display the page in full screen mode or log out by clicking your profile photo. In the settings tag, you can open the tag view, fix the header, or display the sidebar logo.
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

    .emphasize {
        font-family: sans-serif;
        font-size: 15px;
        font-weight: bold;
        font-style: italic;
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
