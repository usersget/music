<template>
  <view class="container">
    <image class="logo" src="/static/music_logo.png"></image>
    <view class="form">
      <input v-model="username" type="text" placeholder="用户名"></input>
      <input v-model="password" type="password" placeholder="密码"></input>
      <div class="sub">
      		  <button @click="login">去登录</button>
      		  <button class="register-btn" @click="goToRegister">注册</button>
      </div>
    </view>
	<u-toast ref="uToast" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // 执行登录逻辑
      // ...
	  uni.redirectTo({
	    url: '../login/login'
	  })
    },
    goToRegister() {
		if(this.username&&this.password){
			if(!(/^\d+$/.test(this.password))){
				let user={}
				user.username=this.username
				user.password=this.password
				  this.$sqlhttpurl.request('/user','POST',user).then(res=>{
					 this.$refs.uToast.show({
					 	title: res.title,
					 	type: res.msg?'success':'warning',
					 })
					 if(res.msg){
						 uni.redirectTo({
						   url: '../login/login'
						 })
					 }
				 })	
			}else{
				this.$refs.uToast.show({
					title: '为了您账户安全，密码不能为纯数字',
					type: 'error',
				})
			}
		}else{
			this.$refs.uToast.show({
				title: '用户名或密码不能为空',
				type: 'error',
			})
			
		}
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logo {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.sub{
	display: flex;
}
button {
	flex-shrink: 0;
  width: 120px;
  height: 40px;
  /* margin-bottom: 10px; */
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 10px;
}

.register-btn {
  background-color: transparent;
  color: #007aff;
}
</style>