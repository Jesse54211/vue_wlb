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
	float:right;
	line-height:50px;
	color:white;
}
.right>a{
	color:white;
	margin-right:30px;
	font-size:15px;
}
</style>
