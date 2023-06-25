<template>
	<!-- 我的 -->
	<view style="height: 100vh; background-color: #fff;overflow: auto;">
		<view class="top-wrapper">
			<u-navbar :is-back="false"
				title-color="#ffffff"
				:background="{backgroundColor: navBgColor}" 
				:border-bottom="false"  
				title="我的">
				<view slot="right" style="margin-right: 24rpx;" @click="onClickMenu">
					<u-badge :absolute="true" :offset="[10, 10]" class="icon-index" size="mini" type="error" :count="99"></u-badge>
					<u-icon size="50" color="#ffffff"  name="list"></u-icon>
				</view>
			</u-navbar>
			
			<!-- 用户头像名字 -->
			<view class="avatar-box flex-layout flex-center" @click="onClickMenu()">
				<u-avatar :src="user.src" mode="square" size="90" ></u-avatar>
				<view class="user-name-box">
					<view class="user-name">{{user.name=="root"||user.name=="admin"?"管理员":user.name}}</view>
					<u-tag text="Lv.8" size="mini" bg-color="#a9aba6" 
						color="#fff" border-color="transparent" shape="circle"/>
				</view>
			</view>
			
			<!-- 本地音乐等 -->
			<view class="top-grid">
				<u-grid :col="4" :border="false">
					<u-grid-item :key="index"  v-for="(item,index) in topGridData" bg-color="transparent">
						<view class="m-icon" @click="navblist()">
							<u-icon size="55" color="#ffffff"  :name="item.icon"></u-icon>
						</view>
						<view class="m-text">{{item.text}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
		
		<!-- 底部白色部分内容 -->
		<view class="bottom-wrapper">
			<!-- 我喜欢的音乐 -->
			<u-card class="custom-card" :border="false" >
				<view slot="head" class="flex-layout">
					<view class="h-title">我的音乐</view>
					<view class="right-icon">></view>
				</view>
				<view class="music-row" slot="body">
					<u-row gutter="16">
						<u-col span="4">
							<view class="row-item ">
								<u-image border-radius="15" width="100%" height="300rpx" src="/static/image/vertical_bg2.jpeg"></u-image>
								<view class="center-text flex-column flex-center listfilmes">
									<u-icon size="70rpx" color="#ff6340" name="heart-fill"></u-icon>
									<view class="text" style="color: #fff;margin-top: 25%;">我喜欢的音乐</view>
								</view>
							</view>
						</u-col>
						
						<u-col span="4">
							<view class="row-item ">
								<u-image border-radius="15" width="100%" height="300rpx" src="/static/image/vertical_bg.jpeg"></u-image>
								<view class="center-text flex-column flex-center listfilmes">
									<u-icon size="70rpx" color="#fff" name="play-circle"></u-icon>
									<view class="text" style="color: #fff;margin-top: 25%;">私人FM</view>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
			
			<!-- 最近播放 -->
			<u-card class="custom-card" :border="false" >
				<view slot="head" class="flex-layout">
					<view class="h-title">最近播放</view>
					<!-- <view class="right-icon">></view> -->
				</view>
				<view class="music-row" slot="body">
					<u-row gutter="16">
						<u-col span="6">
							<view class="row-item-square flex-layout">
								<view class="left">
									<u-image border-radius="15" width="120rpx" height="120rpx" src="/static/image/vertical_bg.jpeg"></u-image>
									<view class="center-text flex-column flex-center">
										<u-icon size="55rpx" color="#ff6340" name="play-circle-fill"></u-icon>
									</view>
								</view>
								<view class="right flex-column">
									<view>全部已播歌曲</view>
									<view class="bottom">300首</view>
								</view>
							</view>
						</u-col>
						
						<u-col span="6">
							<view class="row-item-square flex-layout">
								<view class="left">
									<u-image border-radius="15" width="120rpx" height="120rpx" src="/static/image/vertical_bg.jpeg"></u-image>
									<view class="center-text flex-column flex-center">
										<u-icon size="55rpx" color="#ff6340" name="play-circle-fill"></u-icon>
									</view>
								</view>
								<view class="right flex-column">
									<view>歌单：令人上瘾的电音</view>
									<view class="bottom">继续播放</view>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
			
			<!-- 歌单模块 -->
			<u-card class="custom-card" :border="false" >
				<view slot="head" class="flex-layout">
					<view class="h-title">创建歌单</view>
					<view class="right-icon">
						
						<u-icon name="more-dot-fill" @click="onShowCreate= true"></u-icon>
					</view>
				</view>
				<view class="music-row" slot="body">
					<u-row gutter="16">
						<u-col span="6">
							<view class="row-item-square flex-layout">
								<view class="left">
									<u-image border-radius="15" width="120rpx" height="120rpx" src="/static/image/vertical_bg.jpeg"></u-image>
									<view class="center-text flex-column flex-center">
										<u-icon size="55rpx" color="#ff6340" name="play-circle-fill"></u-icon>
									</view>
								</view>
								<view class="right flex-column">
									<view>2019年度歌单</view>
									<view class="bottom">10首</view>
								</view>
							</view>
						</u-col>
						
						<u-col span="6">
							<view class="row-item-square flex-layout">
								<view class="left">
									<u-image border-radius="15" width="120rpx" height="120rpx" src="/static/image/vertical_bg.jpeg"></u-image>
									<view class="center-text flex-column flex-center">
										<u-icon size="55rpx" color="#ff6340" name="play-circle-fill"></u-icon>
									</view>
								</view>
								<view class="right flex-column">
									<view>全部已播歌曲</view>
									<view class="bottom">300首</view>
								</view>
							</view>
						</u-col>
						
					</u-row>
				</view>
			</u-card>
		</view>
		
		
		<!-- 创建歌单、歌单管理等弹出选项 -->
		<u-action-sheet :list="geDanFunctions" @click="ActionSheet" :safe-area-inset-bottom="true" v-model="onShowCreate"></u-action-sheet>
		<u-toast ref="uToast" />
		<!-- 抽屉 -->
		<u-popup v-model="popupshow" mode="right"  width="80%">
				<view style="width: 100%;">
					<u-navbar :custom-back="displypopup" title="">
					</u-navbar>
					<!-- 用户头像 -->
					<view class="avatar-box flex-layout flex-center" @click="userlog()">
						<u-avatar :src="user.src" mode="square" size="50" ></u-avatar>
						<div class="user-name">{{user.name=="root"||user.name=="admin"?"管理员":user.name}}</div>
						<u-button size="mini" shape="circle">签到 ></u-button>
					</view>
					
					<!-- 我的消息、宫格 -->
					<view class="user-grid" >
						<u-grid :col="4" :border="false">
							<u-grid-item :key="index"  v-for="(item,index) in userGridData">
								<view class="m-icon">
									<u-badge v-if="item.useBadge" class="icon-index" size="mini" type="error" :count="item.count"></u-badge>
									<u-icon size="48" color="#e51419"  :name="item.icon"></u-icon>
								</view>
								<view class="m-text">{{item.text}}</view>
							</u-grid-item>
						</u-grid>
					</view>
					
					
					<!-- 功能列表 -->
					<view style="margin-bottom: 100rpx;">
						<u-cell-group>
							<u-cell-item icon="edit-pen" title="创作者中心" :arrow="false"></u-cell-item>
						</u-cell-group>
						
						<u-cell-group :border="false">
							<u-cell-item :border-bottom="false" icon="play-circle" title="听歌识曲" :arrow="false" value="可识别其他app歌曲"></u-cell-item>
							<u-cell-item :border-bottom="false" icon="rmb-circle" title="演出" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="shopping-cart" title="商城" :arrow="false" value="iphone11pro max免费拿"></u-cell-item>
							<u-cell-item :border-bottom="false" icon="google-circle-fill" title="游戏推荐" :arrow="false" value="王者荣耀上号"></u-cell-item>
							<u-cell-item :border-bottom="false" icon="map" title="附近的人" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="bell" title="口袋彩铃" :arrow="false" value="开学季必备铃声"></u-cell-item>
						</u-cell-group>
						
						<u-cell-group :border="true">
							<u-cell-item :border-bottom="false" icon="order" title="我的订单" :arrow="false"></u-cell-item>
							<u-cell-item :border-bottom="false" icon="clock" title="定时停止播放" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="scan" title="扫一扫" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="clock" title="音乐闹钟" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="baidu" title="音乐云盘" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="more-circle" title="在线听歌免流量" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="coupon" title="优惠券" :arrow="false" ></u-cell-item>
							<u-cell-item :border-bottom="false" icon="heart" title="青少年模式" :arrow="false" ></u-cell-item>
						</u-cell-group>
					</view>
					
					<view class="bottom-box">
						<u-grid :col="3" >
							<u-grid-item >
								<view class="flex-layout flex-center">
									<u-icon name="hourglass"  size="28"></u-icon>
									夜间模式
								</view>
							</u-grid-item>
							<u-grid-item >
								<view><u-icon name="setting"  size="28"></u-icon>设置</view>
							</u-grid-item>
							<u-grid-item >
								<view @click="backlogin()"><u-icon name="close-circle"  size="28"></u-icon>退出</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navBgColor: 'rgba(150,150,140, 10)',
				user:{
					name:"",
					src:""
				},
				popupshow:false,
				topGridData: [
					{text: '本地音乐', icon:'play-circle',},
					{text: '下载管理', icon:'download',},
					{text: '我的电台', icon:'kefu-ermai',},
					{text: '我的收藏', icon:'star',},
				],
				//显示创建歌单等选项
				onShowCreate: false,
				geDanFunctions: [
					{text: '创建新歌单', },
					{text: '歌单管理', },
					{text: '截图导入歌单', },
					{text: '恢复歌单', },
					{text: '切换至单列模式', },
				],
				show: false,
				userGridData: [
					{ text:'我的消息',icon: 'email', useBadge: true, count: 99 },
					{ text:'我的好友',icon: 'account',   },
					{ text:'个人主页',icon: 'home',   },
					{ text:'个性装扮',icon: 'shopping-cart', },
				]
			}
		},
		methods: {
			onClickMenu(){
				this.popupshow=true
			},
			userlog(){
				if(this.user.name=="游客"){
					this.backlogin()
				}else{
				this.$refs.uToast.show({
					title: '系统正在升级，更多精彩敬请期待',
					type: 'success',
				})
				}
			},
			navblist(){
				this.$refs.uToast.show({
					title: '系统正在升级，请稍后再试',
					type: 'success',
				})
			},
			backlogin(){
				uni.redirectTo({
					url: '../login/login',
				});
			},
			displypopup(){
				this.popupshow=false
			},
			ActionSheet(index){
				this.$refs.uToast.show({
					title: '系统正在升级，请稍后再试',
					type: 'success',
				})
			}
		},
		onHide() {
			this.popupshow=false
			this.show=false
			this.onShowCreate=false
		},
		onLoad() {
			this.user.name=this.$store.state.user.name
			this.user.src=this.$store.state.user.url
			// console.log(this.user);
			// console.log(this.$store.state.user);
		}
	}
</script>

<style scoped>
.uni-view::before, uni-view::after, uni-view{
	background-color: transparent;
}
	.listfilmes{
		text-align: center;
		margin-top: 59%;
	}
	
	.top-wrapper{
		background-image: linear-gradient(to top, #8a8c87, #9a988c);  
	}
	.avatar-box{
		padding: 20px;
		color: #ffffff;
	}
	.avatar-box .user-name-box{
		flex: 1;
		padding: 0 20px;
	}
	.avatar-box .user-name{
		font-size: 35rpx;
		font-weight: bolder;
		margin-bottom: 8rpx;
		margin-left: 8rpx;
		color: red;
	}
	
	/**
	 * 用户头像下的功能
	 */
	.top-grid{
		padding-bottom: 40rpx;
	}
	.top-grid .m-text{
		font-size: 22rpx;
		margin-top: 8rpx;
		color: #ffffff;
	}
	.top-grid .m-icon{
		color: #ffffff;
	}
	
	/**
	 * 底部白色内容
	 */
	.bottom-wrapper{
		min-height: 1200rpx;
		background-color: #ffffff;
		position: relative;
		top: -65rpx;
		border-radius: 40rpx 40rpx 0 0;
	}
	
	.custom-card{
		
	}
	.custom-card .h-title{
		flex: 1;
		font-size: 30rpx;
		font-weight: bolder;
	}
	.custom-card .right-icon{
		color: #808080;
		font-weight: bolder;
	}
	
	/**
	 * 我喜欢的音乐
	 */
	.music-row{
		
	}
	.music-row {
		
	}
	.music-row  .row-item{
		border-radius: 20rpx;
		position: relative;
	}
	.music-row  .row-item:active::before{
		background-color: rgba(0,0,0,.4);
	}
	.music-row  .row-item::before{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.2);
		z-index: 99;
		border-radius: 20rpx;
	}
	.music-row .row-item .center-text{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		font-size: 20rpx;
		color: #fff;
	}
	.music-row .row-item .center-text .text{
		margin-top: 10rpx;
		letter-spacing: 2rpx;
	}
	
	/* 正方形 */
	.music-row .row-item-square{
		position: relative;
	}
	.music-row  .row-item-square:active::before{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.2);
		z-index: 99;
	}
	.music-row .row-item-square .left{
		position: relative;
	}
	.music-row .row-item-square .left .center-text{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		font-size: 22rpx;
		color: #000;
	}
	.music-row .row-item-square .right{
		position: relative;
		padding-left: 16rpx;
		font-size: 22rpx;
		justify-content: center;
		align-items: flex-start;
		font-weight: bolder;
		color: #333;
	}
	.music-row .row-item-square .right .bottom{
		margin-top: 10rpx;
		color: #808080;
		font-size: 20rpx;
	}
	.flex-layout{
		display: flex;
	}
		
</style>
