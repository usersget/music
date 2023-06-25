<template>
	<view class="info-list">
		<view class="img-info">
			<view class="cardimg">
				<img :src="item.al.picUrl" alt="" srcset="">
			</view>
			<view class="info">
				<view class="info-top">
					<text>{{item.name}}</text>
				</view>
				<view class="info-buttom">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="right-film" @click="listen(item)">
				<text  class="iconfont" :class="statu?'icon-24gf-playCircle':'icon-zanting1'"></text>
				<text style="margin-left: 10px;" class="icon-gengduo2 iconfont"></text>
		</view>
		
	</view>
</template>

<script>
	import  Audio from "../../utils/music.js"
	export default {
		props:['item'],
		data() {
			return {
				musicurl:"",
				statu:true
			}
		},
		methods: {
			//获取url
			async geturl(id){
				try {
					   const res = await uni.request({
						 url:this.$httpurl+'/song/url?id=33894312',
					     method: 'GET'
					   });
					   return res.data.data;
					 } catch (error) {
					   console.error('请求数据失败', error)
					   return null;
					 }
			},
			listen(item){
					uni.navigateTo({
						url: '../../pages/detail/detail?songId='+item.id,
					});
			}
		}
	}
</script>

<style scoped>
.img-info{
	display: flex;
}
.cardimg{
	width: 100rpx;
	height: 100rpx;
	overflow: hidden;
	border-radius: 20rpx;
}
.cardimg>img{
	width: 100%;
	object-fit: contain;
}
.info-top{
	font-size: 28rpx;
	/* font-weight: 600; */
	line-height: 60rpx;
}
.info-buttom{
	zoom: 0.9;
	font-size: 12rpx;
}
.info{
	margin-left: 20rpx;
}
.right-film{
	font-size: 25px;
}
.itemcard{
	width: 94%;
	margin: 10rpx 0rpx;
	border-radius: 25rpx;
	overflow: hidden;
	padding:0rpx 20rpx;
}
.card-title{
	display: flex;
	height: 60rpx;
	line-height: 60rpx;
	justify-content: space-between;
}
.info-list{
	margin: 0rpx 20rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
