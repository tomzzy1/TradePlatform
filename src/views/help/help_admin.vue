<template>
    <div class="app-container">
        <el-collapse class="collapse">
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Overall</span>
                </template>
                <span class="introduction">
                    <ul>
                        <li>Check personal information, user list and business statistics in the "Homepage"</li> 
                        <li>Browse different datasets through the "Setting" page</li>
                        <li>Set pricing parameters for each dataset, including "Price Coefficient" and "Sensitivity Degree"</li>
                        <li>Type in one query and then check out the statistics from different pricing algorithms in order to select the best one.</li>
                    </ul>
                </span>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Homepage</span>
                </template>
                <span class="introduction">
                    Homepage is the page displaying your information, including basic info, business statistics and user list.
                </span>    
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <span class="intro_title">Setting</span>
                </template>
                <span class="introduction">
                    Setting is the page where you can browse different datasets and set parameters for each dataset. In addition, you can check the statistics from different pricing algorithms and select one of them.
                <ul>
                    <li>
                        <span class="intro_title_2">Search</span>: Select the attribute for searching, including "name", "source" and "size". Search with the keyword typed in or clear the previous search
                    </li>
                    <li>
                        <span class="intro_title_2">Set Parameters</span>: Set the Price Coefficient and Sensitivity Degree for the specific dataset
                    </li>
                    <li>
                        <span class="intro_title_2">Select Pricing Algorithms</span>: 
                            <ul>
                                <li>
                                   <span class="intro_title_2">Test</span>: Type in the query language to test the three different pricing algorithms
                                </li>
                                <li>
                                    <span class="intro_title_2">Demonstration</span>: Demonstrate the basic formula for three different pricing algorithms. And demonstrate the testing results with speeds, prices and corresponding values
                                </li>
                                <li>
                                    <span class="intro_title_2">Selection</span>: Select one prcing algorithm to use for prcing for the buyer and seller
                                </li>
                            </ul>     
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
