//const baseurl="http://10.100.141.137:3001"
const baseurl="http://8.130.117.148:3001"

let header={
	
}
const setheader=(user)=>{
	header=user
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
	request,baseurl,setheader
}
export default httprequest