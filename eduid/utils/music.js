// http://localhost:3000/song/url?id=
const innerAudioContext = uni.createInnerAudioContext()
innerAudioContext.autoplay = true

const listenplay=()=>{
	innerAudioContext.play(() => {
	console.log('播放');
	});
}
const setmusicurl=(musicurl)=>{
		innerAudioContext.src = musicurl;
		setTimeout(()=>{onplys()},3000)	
}
const onplys=()=>{
	// innerAudioContext.stop()
	innerAudioContext.onPlay(() => {
	console.log('开始播放');
	});
}
const listenpause=()=>{
	innerAudioContext.pause(() => {
	  console.log('暂停播放');
	});
}
const listenstop=()=>{
	innerAudioContext.stop(() => {
	  console.log('停止播放');
	});
}

const music={
	onplys,
	listenpause,
	listenstop,
	listenplay,
	setmusicurl
}
export default music