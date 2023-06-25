<template>
	<view>
		<myheader></myheader>
		<u-modal v-model="show" :content="content" @confirm="backhome()"></u-modal>
	</view>
</template>

<script>
	import myheader from "@/commponent/header/header.vue"
	export default {
		components:{ myheader },
		data() {
			return {
				show: false,
				content: '系统正在升级，请稍后再试'
			}
		},
		methods: {
			open() {
				this.show = true;
			},
			backhome(){
				uni.reLaunch({
						url: '../index/index'
				})
			}
		},
		onLoad(){
			this.open()
		}
	}
</script>

<style>

</style>
