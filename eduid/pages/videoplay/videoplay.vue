<template>
	<div class="vodeomv">
		<u-navbar :custom-back='goback' back-text="返回" title="MV详情"></u-navbar>
		<video id="mv" :src="mvurl" :autoplay="autoploy" @fullscreenchange="fullscreenchange"></video>
		<view class="center">
			<text>{{info.artist.authorname}} 
			<img style="width: 30rpx;display: inline-block;" src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png" alt="" srcset="">
			: {{info.identify.imageDesc}}</text>
			
			<div class="title">
				{{info.artist.briefDesc}}
			</div>
			<div class="authorinfo">
				<img :src="info.artist.avatar" alt="" srcset="">
			</div>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mvurl:'',
				autoploy:true,
				info:{
					artist:{
						authorname:""
					},
					identify:{
						imageDesc:"流行乐女歌手、词曲创作人"
					}
				}
			}
		},
		methods: {
			goback(){
				uni.navigateBack({
					delta: 1
				});
			},
			getmv(id){
			  this.$http('/mv/url?id='+id).then(res=>{
				this.mvurl = res.data.url
			 })		
			},
			fullscreenchange (e){
			   if(!e.detail.fullScreen){
			      this.videoContext.stop()
			   }
			},
			//详细信息
			getmvinfo(id){
			  this.$http('/artist/detail?id='+id).then(res=>{
				this.info = res.data
				this.info.artist.authorname=this.info.artist.name
				 console.log(this.info.identify);
			 })	
			},
		},
	onLoad: function (option) { 
			this.getmv(option.id)
			this.getmvinfo(option.author)
		}
	}
</script>

<style scoped>
	
.vodeomv>video{
	width: 100%;
	margin: auto;
}
.center{
	width: 94%;
	margin: 15px auto;
	color:#000;
	font-size: 20px;
}
.authorinfo{
	width: 100%;
}
.authorinfo>img{
	width: 100%;
	object-position: center;
}
</style>
