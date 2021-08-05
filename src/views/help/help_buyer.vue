<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal information and order history in the "Homepage"</li> 
                        <li>Browse different datasets through the "Gallery" page</li>
                        <li>Find out their detailed information through the "Details" page</li>
                        <li>Add the dataset you want into the cart through the "Cart" page</li>
                        <li>Place an order through the "Order" page</li>
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
                    <span class="intro_title">Gallery</span>
                </template>
                <span class="introduction">
                    Gallery is the page for you to browse different datasets with basic informations. 
                    <ul>
                        <li>
                            <span class="intro_title_2">Types of View</span>: Table View & Grid View
                        </li>
                        <li>
                            <span class="intro_title_2">Search</span>: Select the attribute for searching, including "name", "price" and "query". Search with the keyword typed in or clear the previous search
                        </li>
                        <li>
                            <span class="intro_title_2">View Details</span>: Find out more detailed information of certain dataset
                        </li>
                        <li>
                            <span class="intro_title_2">Add to Cart</span>: In table view, add the entire dataset into the cart
                        </li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Detail</span>
                </template>
                <span class="introduction">
                    Detail is the page for you to find out more detailed information for each dataset.
                <ul>
                    <li>
                        <span class="intro_title_2">Query</span>: Select or type in the query language while buying the dataset
                    </li>
                    <li>
                        <span class="intro_title_2">Complete the Dataset</span>: Check the box if you want to pay more for a more complete dataset
                    </li>
                    <li>
                        <span class="intro_title_2">Buy</span>: Buy the entire dataset or it with query
                    </li>
                </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Cart</span>
                </template>
                <span class="introduction">
                    Cart is the page where you can browse the datasets added to the cart by you.
                <ul>
                    <li>
                        <span class="intro_title_2">Search</span>: Select the attribute for searching, including "name", "price" and "query". Search with the keyword typed in and clear the previous search.
                    </li>
                    <li>
                        <span class="intro_title_2">Buy</span>: Buy one specific dataset with the button inside the row. Select several dataset and buy them all with the button in the bottom.
                    </li>
                    <li>
                        <span class="intro_title_2">Edit</span>: Delete the certain dataset from the cart
                    </li>
                </ul>
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title" class="intro_title">
                    <span class="intro_title">Order</span>
                </template>
                <span class="introduction">
                    Order is the page where you can deliver an order with the datasets you want.
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
