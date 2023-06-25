<template>
	<view class="content">
		<myheader></myheader>
		<!-- header -->
		<view class="headhome" @click="tosearch()">
			<uni-search-bar class="uni-mt-10" readonly radius="100" placeholder="音乐/歌手" clearButton="auto" cancelButton="none" />
		</view>
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
					<swiper class="swiper" circular 
					:indicator-dots="indicatorDots" 
					:autoplay="autoplay" 
					:interval="interval"
					:duration="duration">
						<swiper-item v-for="item in bannerList" :key="item.id">
							<view class="swiper-item">
								<img :src="item.img_url" alt="" srcset="">
							</view>
						</swiper-item>
					</swiper>
		</view>
		<!-- navbar -->	
		<view class="navbar-list">
			<view class="box-ul">
				<view class="box-li" v-for="item in navlist" :key="item.id" @click="navbar(item.name)">
					<view>
						<text class="iconfont iconfile" :class="item.icon"></text>
					</view>
					<view>
						<text>{{item.name}}</text>
					</view>
					
				</view>
			</view>
		</view>
		<!-- 私人专属 -->
		<view class="center-list" v-for="item in titlelist" :key="item.id">
			<cardItem :list="item">
			</cardItem>
		</view>
		<u-toast ref="uToast" />
		<!-- 遮罩层 -->
			<u-mask :show="show" @click="show = false">
					<view style="width: 50%;height: 300rpx;
			background-color: transparent;
			margin: 0 auto;
			text-align: center;
			margin-top:80% ;">
						<view class="rect">
							<u-loading mode="flower" size="100" color="red"></u-loading>
						</view>
					</view>
					
				</u-mask>
	</view>
</template>

<script>
	import myheader from "@/commponent/header/header.vue"
	import cardItem from "@/commponent/cardItem/cardItem.vue"
	export default {
		components:{
				cardItem,
				myheader
		},
		data() {
			return {
				searchValue: '123123',
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500,
					bannerList:[],
					titlelist:[],
					show:false,
					navlist:[
						{
							id:0,
							name:"乐库",
							icon:"icon-yinle"
						},
						{
							id:1,
							name:"猜你喜欢",
							icon:"icon-cainixihuan"
						},
						{
							id:2,
							name:"排行榜",
							icon:"icon-paihangbang2"
						},
						{
							id:3,
							name:"电台",
							icon:"icon-shouyinji"
						},
						{
							id:4,
							name:"会员中心",
							icon:"icon-huiyuan1"
						},
					]
			}
		},
		onLoad() {
			this.show=true
			this.getbanner()
			this.gettitle()	
		},
		
		methods: {
			tosearch(){
				uni.navigateTo({
					url: '../search/search'
				});
			},
			//获取banner
			 getbanner(){
				  this.$sqlhttpurl.request('/user/banner').then(res=>{
					 this.bannerList=res.msg
				 })
				},
			//获取标题
			gettitle(){
				this.$sqlhttpurl.request('/music').then(res=>{
					this.titlelist=res.msg
					this.show=false
				})
				
				},
			navbar(index){
				console.log(index);
				this.$refs.uToast.show({
					title: '系统正在升级，请稍后再试'+index,
					type: 'success',
				})
			}
			
			
		},		
	}
</script>

<style scoped>
.center-list{
	width: 94%;
	margin: 0 auto;
}
.iconfile{
		font-size: 50rpx;
		
	}
	.box-li{
		height: 100%;
		margin: 0 30rpx;
		text-align: center;
	}
	.box-ul{
		width: 100%;
		padding-top: 20rpx;
		height: 100%;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 0 auto;
		padding-top: 20rpx;
		display: flex;
		justify-content: center;
		box-shadow: 0rpx 10rpx 10rpx 0rpx #a6a6a6;
	}
	.navbar-list{
		width: 94%;
		height: 120rpx;
		margin: 40rpx auto;	
	}
	.headhome{
		height: 100rpx;
		width: 100%;
		/* border-color: aliceblue; */
		margin: 20rpx 0rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
.uni-margin-wrap {
		width: 94%;
		border-radius: 30rpx;
		overflow: hidden;
		margin-top: 10rpx;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		background-color: aqua;
	}
	.swiper-item>img{
		height: 100%;
		object-fit: contain;
	}
</style>
