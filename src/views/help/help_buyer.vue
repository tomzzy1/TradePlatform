<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    As a buyer, you can browse different datasets through the "Gallery" page, find out their detailed information through the "Details" page, add the dataset you want into the cart through the "Cart" page, as well as place an order through the "Order" page.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Homepage</span>
                </template>
                <span class="introduction">
                    Homepage is the page displaying your information, including basic info, statistics, order history and so on.
                </span>
                
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Gallery</span>
                </template>
                <span class="introduction">
                    Gallery is the page for you to browse different datasets with basic informations. There are two types of views for browsing, one is the "Table" view and the other is the "Grid" view. On the top of the page, there is a selection box, which is used to select the attribute for searching, including "name", "price" and "query". After typing in the keywords in the input box besies, you can search for the certain content by pressing the "Search" button. If you want to clear the previous searching results, click the "Clear" button.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Detail</span>
                </template>
                <span class="introduction">
                    Detail is the page for you to find out more detailed information for each dataset.
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Cart</span>
                </template>
                <span class="introduction">
                    Cart is the page where you can browse the datasets added to the cart by you.
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
                    Help is the page where you can seek for help about the functionalities and methods to use the platform.
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
