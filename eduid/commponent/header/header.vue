<template>
	<view>
		<view class="bar" :style="{ height: statusBarHeight + 'px' }"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 statusBarHeight: 20, //状态栏的高度
			}
		},
		methods: {
			created() {
			    //获取手机系统信息
			    const systemInfo = uni.getSystemInfoSync();
			    //获取状态栏信息-h5没有状态栏
			    this.statusBarHeight = systemInfo.statusBarHeight;
			  },
		}
	}
</script>

<style scoped>
.bar{
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
}
</style>
