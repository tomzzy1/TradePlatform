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
                    <span class="intro_title">What can I do in the platform as a buyer?</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal statistics</li>
                        <li>Browse uploaded datasets</li>
                        <li>Add the dataset into the cart</li>
                        <li>Place an order with the <span class="emphasize">SQL query</span></li>
                        <li>Order the whole dataset</li>
                    </ul>
                </span>           
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to check out the business statistics as a buyer?</span>
                </template>
                <span class="introduction">
                    In the “Homepage”, you can check out the personal statistics of the platform. You can find out the numbers of visits and orders since the platform is online in the panel on the top of the page. You can also check out the comparison between number of datasets visited and ordered in the bar chart below. In addition, the table in the bottom shows the history orders. For more detailed information, you can hover the cursor over the graph.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to browse and search for a specific dataset uploaded by the seller?</span>
                </template>
                <span class="introduction">
                    The datasets uploaded by the seller are listed in the “Gallery” page, which includes the “Name”, “Description”, “Date”, “Size”, and “Source” of the dataset. There are two types of ways to browse the datasets, “Grid” view or “Table” view. You can also filter the required datasets in the search bar. Specifically, one can search the datasets with keywords while restricting the “Name” “Source” or “Size”. Use “Clear” button to clear all previous searching results.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to check out the details of the dataset?</span>
                </template>
                <span class="introduction">
                    In the “Gallery” page, click the “Detail” on the dataset you want. The detailed description of the dataset is shown.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">How to add the datasets into the cart?</span>
                </template>
                <span class="introduction">
                    If you want to add the dataset with query, you can select the query option from the drop-down box in the “Detail” page, which selects the name of the table and column, as well as the restricted condition. The query options are changing according to the dataset and the type of data of the selected column. Or you can type in the entire query by yourself. The system will check if the query is valid and pop out an error if it is not. If you want to add the entire dataset into the cart, you can click “Add the Entire Dataset” in the “Gallery” page of “Table” view or in the “Detail” page. In addition, before adding, you can check the box, choosing to optimize the dataset at a cost of a higher price.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">How to manage your cart?</span>
                </template>
                <span class="introduction">
                    In the “Cart” page, you can search for the dataset in your cart with attributes “Name”, “Price” or “Query”. If you want to delete an item out of your cart, click the “Delete”.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">How to place an order?</span>
                </template>
                <span class="introduction">
                    You can order one dataset or server at the same time. In the “Cart” page, click the “Buy” inside the table for an order of a single dataset. To order several datasets simultaneously, check the “Selected’ box and click the “Buy” button at the bottom. Then, in the “Order” page, you can choose to pay or cancel the order.
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
