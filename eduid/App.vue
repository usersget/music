<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	@import url('static/font/iconfont.css');
	@import url('static/iconfont/iconfont.css');
	body{
		background: url('static/back1.jpg') no-repeat center center;
		background-size: cover;
		background-attachment: fixed;
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
	view::before,view::after,view{
		background-color: rgba(123, 123, 123, 0.05);
		/* opacity: 0.8; */
		 color: #000; 
	}
	span,span::before,
	text::before,text,
	text::after,uni-text>span{
		background-color: rgba(255, 255, 255, 0) !important;
	}
</style>
<style lang="scss">
	@import "uview-ui/index.scss";
</style>
