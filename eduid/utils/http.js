const baseurl="http://8.130.117.148:3000"
const header={
	
}
const request= (url='',method='GET',data={})=>{
	return new Promise((resolve,reject)=>{
	   uni.request({
			url:baseurl+url,
			sslVerify:false,
			header:header,
			data:data,
			method:method,
			success: res => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {}
		})
	})
}
const httprequest={
	request,baseurl
}
export default httprequest