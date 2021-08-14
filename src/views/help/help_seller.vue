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
                    <span class="intro_title">What can I do in the platform as a seller?</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check out personal statistics</li>
                        <li>Upload datasets with associated information</li>
                        <li>Browse datasets to be optimized</li>
                        <li>Post crowdsourcing questions</li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to check out the business statistics as a seller?</span>
                </template>
                <span class="introduction">
                    <br />
                    In the “Homepage”, you can check out the personal statistics of the platform. You can find out the numbers of visits, datasets uploaded, orders, and datasets traded since the platform is online in the panel on the top of the page. You can also check out the number of requirements to optimize the datasets in a week in the bar chart below. In addition, the table in the bottom shows the history orders. For more detailed information, you can hover the cursor over the graph.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to upload a dataset?</span>
                </template>
                <span class="introduction">
                    <br />
                    For someone with a dataset, to upload a dataset, at first you need to fill in its corresponding information, including “Name”, “Base Price”, “Source” and “Description”. Then, you can choose the file type of the dataset you are about to upload, including “CSV”, “TXT” and “ZIP”. For the file upload system, it supports multiple file uploading, which composes the dataset as multiple data sheets.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to browse and search among datasets required to optimize?</span>
                </template>
                <span class="introduction">
                    <br />
                    When you receive the request of optimization from the buyer, the datasets uploaded required to optimize are listed in the “Post” page, which includes the “Name” and “Description” of the dataset. You can also filter the required datasets in the search bar. Specifically, one can search the datasets with keywords while restricting the “Name” or “Description”. Use “Clear” button to clear all previous searching results.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">How to post crowdsourcing questions?</span>
                </template>
                <span class="introduction">
                    <br />
                    In the “Post” page, click the “Post Questions” on the dataset you want. Then the system will search for all the places with missing data and provide information from the original datasets to help you post the questions properly. The information includes “Column of Missing Data”, which is the column that the missing data belongs to, “Row of Missing Data”, which is the entire row that the missing data belongs to and “Potential Data”, which is potential data options for the missing data based on the nearby data in the same column. For each piece of missing data, you can post a question, while the number of potential answers is optional. In addition, you can select the correct option and the points of the question, for a further credibility test for the worker.
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
