<template>
	<view class="itemcard">
		<view class="card-title">
			<view class="lefttitle" @click="ishadden()">
				<text class="icon-xiajiantou iconfont"></text>
				<text>{{list.name}}</text>
			</view>
			<view>
				<text class="icon-youjiantou1 iconfont"></text>
			</view>
		</view>
		<view v-if="isshow" v-for="(item,index) in musiclist" :key="index" class="info-list">
				<musicItem :item='item'></musicItem>
		</view>
	</view>
</template>

<script>
	import musicItem from '../musicItem/musicItem.vue'
	export default {
		components:{
			musicItem,
		},
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				isshow:true,
				musiclist:[],
				
			}
		},
		onLoad() {
			
		},
		methods: {
			ishadden(){
			this.isshow=!this.isshow
			},
			//获取每个数据
			async getlist(id){
			  try {
			     const res = await uni.request({
			       url:this.$httpurl+'/playlist/detail?id='+id,
			       method: 'GET'
			     });
			     return res.data;
			   } catch (error) {
			     console.error('请求数据失败', error)
			     return null;
			   }
			},
			
		},
		watch:{
			list:{ 
                handler(value) {
					let list= this.getlist(value.id!==2?value.id:"1001")
					list.then(res=>{
						// console.log(res);
						if(res.playlist.tracks.length!==0){
							this.musiclist = [...res.playlist.tracks]
						}else{
							this.musiclist = []
						}
					  })
                }, 
                immediate: true,//设置为 true 时，第一次进入页面时即监听
                deep: true ,// 深度监听父组件传过来对象变化 
            }
		}
	}
</script>

<style scoped>
	text{
		 background: rgba(255, 255, 255, 0.4) !important;
	}
.itemcard{
	width: 100%;
	margin: 10rpx auto;
	border-radius: 25rpx;
	overflow: hidden;
}
.card-title{
	display: flex;
	height: 60rpx;
	line-height: 60rpx;
	margin: 0rpx 20rpx;
	justify-content: space-between;
}
.info-list{
	height: 120rpx;
	display: flex;
	justify-content: space-between;
	/* padding: 20rpx 0rpx; */
}
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
</style>
