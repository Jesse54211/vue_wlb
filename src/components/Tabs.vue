<template>
    <div class="tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部活动" name="first">全部活动</el-tab-pane>
            <el-tab-pane label="点赞最多" name="second">点赞最多</el-tab-pane>
            <el-tab-pane label="评论最多" name="third">评论最多</el-tab-pane>
            <el-tab-pane label="月榜" name="fourth">月榜</el-tab-pane>
            <el-tab-pane label="周榜" name="fifth">周榜</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
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
    padding-top: 20px;
    padding-left: 100px;
}
</style>