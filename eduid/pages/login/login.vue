<template>
  <view class="container">
    <image class="logo" src="/static/music_logo.png"></image>
    <view class="form">
      <input v-model="username" type="text" placeholder="用户名"></input>
      <input v-model="password" type="password" placeholder="密码"></input>
      <div class="sub">
		  <button @click="login">登录</button>
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
    login(){
		if(this.username&&this.password){
			let user={}
			user.username=this.username
			user.password=this.password
			this.$sqlhttpurl.setheader(user)
			// console.log(user,"user")
			  this.$sqlhttpurl.request('/user','GET').then(res=>{
				  // console.log(res,"res")
				  this.$store.commit('USERNAME',{name:res.title,url:res.img})
				 this.$refs.uToast.show({
				 	title: res.msg,
				 	type: res.code==200?'success':'warning',
				 })
				 
				if(res.code==200){
					uni.switchTab({
						url: '../index/index'
					})
				}
			 })	
		}else{
		this.$refs.uToast.show({
			title: '用户名或密码不能为空',
			type: 'error',
		})
		}
    },
    goToRegister() {
      uni.redirectTo({
        url: '../register/register'
      })
    }
  },
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

button {
  width: 120px;
  height: 40px;
  margin-bottom: 10px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.register-btn {
  background-color: transparent;
  color: #007aff;
}
</style>