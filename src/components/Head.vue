<template>
<div>
  <div class="head">
	<a href=""><div class="title">外联帮</div></a>
	<a href=""><div class="find">发现</div></a>
	<el-input class="input" v-model="input"  placeholder="请输入内容"></el-input>
	<el-button class="btn_smt" >搜索</el-button>
	<div class="right">
		<a href="">发布活动</a>
		<a href="">登入</a>
		<a href="">注册</a>
	</div>
  </div>
<!--  <div class="line"></div>-->
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

        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

    </div>
</div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    msg: String
  },
    data() {
    return {
      input: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
	height:50px;
	width:100%;
	background-color:#62b651;
}
.title{
	height:50px;
	width:55px;
	padding-left:45px;
	text-align:center;
	float:left;
	line-height:50px;
	font-size:18px;
	color:white;
	/* background-color:pink; */
}
.find{
	height:50px;
	width:55px;
	text-align:center;
	float:left;
	line-height:50px;
	font-size:14px;
	color:white;
	padding-left:20px;
}
.input{
	height:50px;
	width:200px;
	padding-left:20px;
	line-height:50px;
	float:left;
}
.btn_smt{
	margin-top: 5px;
	margin-left:5px;
}
.right{
	width:310px;
	height:50px;
	/* background-color:pink; */
	float:right;
	line-height:50px;
	color:white;
}
.right>a{
	color:white;
	margin-right:30px;
	font-size:15px;
}
.center{

}
.nav{
    padding-left: 100px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
