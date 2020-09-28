<template>
    <div>
    <div class="tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部活动" name="first">
<!--                全部活动-->

                    <div class="showdata" v-for="item in indexActData">
                        <img :src="GlobalUrl(item.aimgurl)" width="255" height="150">
                        <br>
                        <a href="">{{ item.title }}</a>

                        <br><div class="tag">{{ item.tag }}</div>
                        <div class="time">发布于 {{ item.showTime }}</div>
                        <div style="color: green" class="time">预算 {{ item.abudget }}</div>
                    </div>


            </el-tab-pane>
            <el-tab-pane label="点赞最多" name="second">点赞最多</el-tab-pane>
            <el-tab-pane label="评论最多" name="third">评论最多</el-tab-pane>
            <el-tab-pane label="月榜" name="fourth">月榜</el-tab-pane>
            <el-tab-pane label="周榜" name="fifth">周榜</el-tab-pane>
        </el-tabs>
    </div>
        <div class="right">
            <span>热门活动</span>
        </div>

    </div>
</template>
<script>
    export default {
        props: {
            indexActData: Array
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
<style scoped>
.tabs{
    width:1000px;
    padding-top: 20px;
    padding-left: 100px;
    float: left;
}
.right{
    width: 200px;
    height: 800px;
    background-color: #62b651;
    float: left;
    padding-top: 80px;
}
.showdata{
    width: 300px;
    height: 255px;
    /*background-color: #62b651;*/
    float: left;
    padding: 15px;
}
.showdata img{
    padding-bottom: 10px;
    border-radius:5px;
}
.showdata a{
    color: cornflowerblue;
    font-size: 15px;
    display: inline-block;
    padding-bottom: 5px;
}
.tag{
    display: inline-block;
    padding: 0 3px;
    height: 20px;
    line-height: 20px;
    background-color: #f2f2f2;
    font-size: 12px;
    color: #999;
    float: left;
}
.time{
    height: 20px;
    line-height: 20px;
    float: left;
    font-size: 12px;
    padding-left: 10px;
}
</style>