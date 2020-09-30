/* eslint-disable */
<template>
<div>
	<div class="center" >
  <div class="head">
	<a href=""><div class="title">外联帮</div></a>
	<a href=""><div class="find">发现</div></a>
	<el-input class="input" v-model="input_search"  placeholder="请输入内容"></el-input>
	<el-button class="btn_smt">搜索</el-button>
	<div class="right">
		<a @click="gopublish">发布活动</a>
		<a @click="dialogVisible_login=true">登入</a>
		<a @click="dialogVisible_register=true">注册</a>
	</div>
<!--	  登录对话框-->
	  <el-dialog
			  title="登录"
			  :visible.sync="dialogVisible_login"
			  width="30%"
			  :before-close="handleClose">
<!--表单-->
		  <el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="用户名：">
				  <el-input v-model="form.login_user"></el-input>
			  </el-form-item>
			  <el-form-item label="密  码：">
				  <el-input v-model="form.login_passwd"></el-input>
			  </el-form-item>
			  <el-form-item label="记住密码:">
				  <el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item>
				  <el-button type="primary" @click="ToLogin">登 录</el-button>
				  <el-button @click="dialogVisible_login = false">取 消</el-button>
			  </el-form-item>
		  </el-form>
	  </el-dialog>
<!--	  注册对话框-->
	  <el-dialog
			  title="注册"
			  :visible.sync="dialogVisible_register"
			  width="30%"
			  :before-close="handleClose">
<!--表单-->
		  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
			  <el-form-item label="用户名：" prop="register_user">
				  <el-input v-model="ruleForm.register_user"></el-input>
			  </el-form-item>
			  <el-form-item label="密  码：" prop="register_passwd_one">
				  <el-input v-model="ruleForm.register_passwd_one"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="register_passwd_two">
				  <el-input v-model="ruleForm.register_passwd_two"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号码" prop="register_phone">
				  <el-input v-model="ruleForm.register_phone"></el-input>
			  </el-form-item>
			  <el-form-item label="个性签名">
				  <el-input v-model="ruleForm.register_note"></el-input>
			  </el-form-item>

			  <el-form-item label="所在学校" prop="region">
<!--				  <select id="province" ></select>-->
				  <el-select v-model="ruleForm.region" placeholder="请选择">
					  <el-option label="区域一" value="shanghai"></el-option>
					  <el-option label="区域二" value="beijing"></el-option>
				  </el-select>
			  </el-form-item>
			  <el-form-item>
				  <el-button type="primary" @click="onSubmit">注 册</el-button>
				  <el-button @click="dialogVisible_register = false">取 消</el-button>
			  </el-form-item>
		  </el-form>
	  </el-dialog>
  </div>
</div>
</div>
</template>

<script>
import '../assets/js/schoolselect.js'

export default {
  name: 'Head',
  props: {
    msg: String
  },
    data() {
    return {
		input_search: '',
		dialogVisible_login: false,
		dialogVisible_register: false,
		form: {
			login_user: '',
			login_passwd: '',
			delivery:''
		},
		ruleForm: {
			register_user: '',
			register_passwd_one: '',
			register_passwd_two:'',
			register_phone:'',
			register_note:'',
			region: '',
			date1: '',
			date2: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
		},
		rules: {
			register_user: [
				{ required: true, message: '请输入用户名', trigger: 'blur' },
				{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
			],
			register_passwd_one: [
				{ required: true, message: '请输入密码', trigger: 'blur' },
				{ min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
			],
			register_passwd_two: [
				{ required: true, message: '确认密码', trigger: 'blur' },
				{ min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
			],
			register_phone: [
				{ required: true, message: '手机号码', trigger: 'blur' },
				{ min: 11, max: 11, message: '长度11个字符', trigger: 'blur' }
			],

			region: [
				{ required: true, message: '请选择活动区域', trigger: 'change' }
			],
			date1: [
				{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
			],
			date2: [
				{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
			],
			type: [
				{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
			],
			resource: [
				{ required: true, message: '请选择活动资源', trigger: 'change' }
			],
			desc: [
				{ required: true, message: '请填写活动形式', trigger: 'blur' }
			]
		}
    }
  },
	methods: {
		handleClose(done) {
			this.$confirm('确认关闭？')
					.then(_=> {
						done();
					})
					.catch(_=> {});
		},
			async ToLogin(){
				var params = new URLSearchParams();
				params.append('username', this.form.login_user);
				params.append('password', this.form.login_passwd);
				this.axios.post('http://localhost/login',params).then(res => {
					this.res=res.data
					console.log(res)
				})

			},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		gopublish(){
			this.$router.push('/publish')
		}
	}

}
</script>
<style scoped>
.center{
	height: 50px;
	width: 100%;
	background-color:#62b651;
}
.head{
	height:50px;
	width:1300px;
	margin: 0 auto;
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
	cursor:pointer
}
</style>
