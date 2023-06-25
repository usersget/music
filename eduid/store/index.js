import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        topIdList : [],
		nextId : '',
		user:{
			name:"游客",
			url:"https://img0.baidu.com/it/u=489552572,2707768722&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1687626000&t=491244724da7fd2626ce4a5f2e2a18d6"
		}
    },
    mutations : {
        INIT_CHANGE(state,payload){
            state.topIdList = payload;
        },
		NEXT_ID(state,payload){
			for(var i=0;i<state.topIdList.length;i++){
				if( state.topIdList[i].id == payload ){
					state.nextId = state.topIdList[i+1].id;
				}
			}
		},
		USERNAME(state,user){
			state.user.name=user.name
			state.user.url = user.url
		}
    }
});