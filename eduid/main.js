import App from './App'
import httprequest from "utils/http.js"
import mysqlhttprequest from "utils/sqlhttp.js"
import store from 'store/index.js' 

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from "uview-ui";
Vue.use(uView);
uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false



Vue.filter('formatCount',function(value){
	
	if( value >= 10000 && value < 100000000 ){
		value /= 10000; 
		return value.toFixed(1) + '万';
	}
	else if(value >= 100000000){
		value /= 100000000;
		return value.toFixed(1) + '亿';
	}
	else{
		return value;
	}
	
});

Vue.filter('formatTime',function(value){
	
	var date = new Date(value);
	
	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
	
});

App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
Vue.prototype.$http=httprequest.request
Vue.prototype.$httpurl=httprequest.baseurl
Vue.prototype.$sqlhttpurl=mysqlhttprequest
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif