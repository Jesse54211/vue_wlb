<template>
    <div class="center">
        <div class="tabs">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部活动" name="first">
    <!--                全部活动-->
                        <div class="showdata" v-for="item in indexActData">
                            <img :src="GlobalUrl(item.aimgurl)" width="255" height="150">
                            <br>
                            <a @click="go" >{{ item.title }}</a>
                            <br>
                            <router-link :to="{name:'Activities', params: {id:item.id}}">测试传递</router-link>
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
            },
            go(){
                this.$router.push('/Activities')
            }
        }
    };
</script>
<style scoped>
.center{
    width:1300px;
    padding-top: 20px;
    margin: 0 auto;
}
.tabs{
    width:1000px;
    float: left;
}
.right{
    width: 260px;
    height: 800px;
    background-color: #62b651;
    padding-top: 80px;
    float: left;
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