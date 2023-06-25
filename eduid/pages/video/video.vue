<template>
	<view>
		<myheader></myheader>
		<view class="header">
			视频 · MV
		</view>
		<view class="center" >
			<view class="video" v-for="item in listimg" :key="item.id" @click="playmv(item)">
				<img :src="item.cover" alt="" srcset="">
				<text>{{item.name}} . {{item.artistName}}</text>
			</view>
			
		</view>
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
	export default {
		components:{ myheader },
		data() {
			return {
				listimg:[],
				show: false
				
			}
		},
		methods: {
		//获取getmvlistimg
		getmvlistimg(){
			this.show=true
		  this.$http('/mv/first').then(res=>{
			this.listimg = res.data
			// console.log(res.data);
			this.show=false
		 })	
		},
			playmv(item){
				// console.log(item.id);
				uni.navigateTo({
					url: '../videoplay/videoplay?id='+item.id+'&author='+item.artistId,
				});
			}
		},
		onLoad() {
			this.getmvlistimg()
		}
	}
</script>

<style scoped>
.header{
	height: 65rpx;
	color: white;
	font-size: 45rpx;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.2);
}
.center{
	width: 100%;
	padding: 10rpx;
	display: flex;
	flex-wrap: wrap;
	padding-top: 30rpx;
}
.video{
	flex-shrink: 0;
	width: 45%;
	margin: 10rpx 16rpx;
	border-radius: 20rpx;
	overflow: hidden;
}
.video>img{
	width: 100%;
	object-fit: contain;
}
.video>text{
	color: #fff;
}

</style>
