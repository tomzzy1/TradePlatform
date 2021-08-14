<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    <br />
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
                    <span class="intro_title">What can I do in the platform as a worker?</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal statistics</li>
                        <li>Browse crowdsourcing questions</li>
                        <li>Answer the questions</li>
                    </ul>
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to check out the questions answering statistics as a worker?</span>
                </template>
                <span class="introduction">
                    <br />
                    In the “Homepage”, you can check out the personal statistics of the platform. You can find out the numbers of datasets with crowdsourcing finished and unfinished since the platform is online in the panel on the top of the page. You can also check out the comparison between number of datasets with crowdsourcing finished and unfinished in the sector chart below. In addition, the table in the bottom shows the crowdsourcing scores for those answered by the worker. For more detailed information, you can hover the cursor over the graph.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to browse and search among datasets with crowdsourcing questions to answer?</span>
                </template>
                <span class="introduction">
                    <br />
                    The datasets with crowdsourcing questions posted by the seller are listed in the “Crowdsourcing” page, which includes the “Name” and “Description”. You can also filter the required datasets in the search bar. Specifically, one can search the datasets with keywords while restricting the “Name”. Use “Clear” button to clear all previous searching results.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">How to answer the crowdsourcing questions?</span>
                </template>
                <span class="introduction">
                    <br />
                    In the “Crowdsourcing” page, click the “Answer” on the dataset you want. Then select one answer that you believed is most appropriate for the missing data for each question. Submit the answer and the system will automatically calculate your final score.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to adjust the view of the page?</span>
                </template>
                <span class="introduction">
                    <br />
                    In the top bar, you can search for the page by its name, display the page in full screen mode or log out by clicking your profile photo. In the settings tag, you can open the tag view, fix the header, or display the sidebar logo.
                </span>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style>

    .intro_title {
        font-family: 'Times New Roman';
        font-size: 25px;
        font-weight: bold;
        display: block;
        margin-left: 10px;
        color: #337ab7;
    }

    .intro_title_2 {
        font-family: sans-serif;
        font-size: 20px;
        font-weight: bold;
    }

    .intro_title_3 {
        display: block;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }

    .introduction {
        display: block;
        font-family: sans-serif;
        font-size: 20px;
        font-weight: normal;
        margin-left: 20px;
    }

    .emphasize {
        font-family: sans-serif;
        font-size: 20px;
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
