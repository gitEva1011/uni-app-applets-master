const home = {
	state: {
		userInfo: {
			userName: ''
		},
		// cookieJwt: ''
	},
	mutations: {
		SET_USER_INFO: (state, userInfo) => {
			state.userInfo = userInfo
		}
	},
	actions: {
		// 缓存用户信息
		setUserInfo({
			commit
		}, userInfo) {
			commit('SET_USER_INFO', userInfo)
		}
	},
	getters: {
		userInfo: state => state.userInfo,
		// cookieJwt: state => state.cookieJwt
	}
};

export default home
