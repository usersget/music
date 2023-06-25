<template>
	<view>
		<view class="headhome">
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="音乐/歌手" clearButton="auto" cancelButton="none" @confirm="search" />
		</view>
		<view v-for="(item,index) in searchlist" :key="index">
			<musicItem class="item" :item="item"></musicItem>
		</view>
	</view>
</template>

<script>
	import musicItem from "../../commponent/musicItem/musicItem.vue"
	export default {
		components:{
			musicItem
		},
		data() {
			return {
				searchlist:[]
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
				this.$http('/cloudsearch?keywords='+res.value+'&limit=10').then(res=>{
							this.searchlist = res.result.songs
							// console.log(res.result.songs);		
				})
			},
		}
	}
</script>

<style scoped>
.headhome{
	margin-bottom: 20px;
}
.item{
	width: 94%;
	
	margin: 20rpx auto;
}
</style>
