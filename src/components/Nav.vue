<template>
        <div class="center">
        <div class="nav">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="white"
                text-color="black"
                active-text-color="#62b651">
                <el-menu-item index="1">综合</el-menu-item>
                <el-menu-item index="2">校园</el-menu-item>
                <el-menu-item index="3">慈善</el-menu-item>
                <el-menu-item index="4"><a href="">体育</a></el-menu-item>
                <el-menu-item index="5">文化</el-menu-item>
                <el-menu-item index="6">会展</el-menu-item>
                <el-menu-item index="7">影视</el-menu-item>
                <el-menu-item index="8">节日</el-menu-item>
                <el-menu-item index="9">商业</el-menu-item>
                <el-menu-item index="10">其他</el-menu-item>
                </el-menu>
        </div>
        </div>
</template>

<style scoped>
.center{
        height: 50px;
        width: 1300px;
        /*background-color:#62b651;*/
margin: 0 auto;
}
.nav{
/*margin: 0 auto;*/
    padding-left: 30px;
}

</style>