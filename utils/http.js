import {
	config
} from '../config.js'

// uni.clearStorageSync();
const cookie = uni.getStorageSync("sessionJWT")//读取cookie
// const userId = uni.getStorageSync("userId")//读取cookie
// const userinfo = uni.getStorageSync("userinfo")//读取cookie
// const switchOrg = uni.getStorageSync("switchOrg")//读取cookie
// var cookie = session
// if(switchOrg == true){
// 	// cookie = 'userId=26; JWT="JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDI3ODA5NDcsImlhdCI6MTYwMjE3NjE0NywiaXNzIjoicG9ueSIsImRhdGEiOnsiaWQiOjI2LCJvcmdhbml6YXRpb25faWQiOiIxIiwicm9sZV9pZCI6MCwibG9naW5fdGltZSI6MTYwMjE0NzM0N319.Ehx19i1PxN6S6phiuIohUnrLyDGIh012tB17ZeqIsB4"; session=.eJyrVsovSk_My6xKLMnMz4vPTFGyyivNydFRKsrPSUXilhanFoG5Rma1AANyErM.EmBlkw.W1m1Pl-fO79cwYf_cVgZmUo8C9k'
// }

// if(userId){
// 	cookie = 'userId='+userId+';session='+session+''
// } else if(userinfo){
// 	cookie = 'userId='+userId+';userinfo='+userinfo+';session='+session+''
// }


class HTTP {
	constructor() {
		this.baseUrl = config.base_url
	}

	request({
		url,
		data = {},
		method = 'GET'
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}

	_request(url, resolve, reject, data = {}, method = 'GET') {
		uni.request({
			url: `${this.baseUrl}${url}`,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'cookie': cookie
				// 'cookie': 'session=eyJvcmdhbml6YXRpb25faWQiOiIxIiwicm9sZV9pZCI6MCwidXNlcl9pZCI6MjZ9.EmBllw.M1nFGtarHq-Q77EoB758WYguJdc; JWT="JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDI3ODU3ODAsImlhdCI6MTYwMjE4MDk4MCwiaXNzIjoicG9ueSIsImRhdGEiOnsiaWQiOjI2LCJvcmdhbml6YXRpb25faWQiOm51bGwsInJvbGVfaWQiOm51bGwsImxvZ2luX3RpbWUiOjE2MDIxNTIxODB9fQ.QWq37DRwsOaRkLyW9M8guzUYIl0atlVuweGRJNVHA3A"; userId=26'
				// 'cookie':uni.getStorageSync("sessionid")//读取cookie
				// 'appId': config.appId,
				// 'token': uni.getStorageSync('AuthTokens'),
				// 'Cookie': 'JWT="JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDI3Nzc5OTEsImlhdCI6MTYwMjE3MzE5MSwiaXNzIjoicG9ueSIsImRhdGEiOnsiaWQiOjI2LCJvcmdhbml6YXRpb25faWQiOm51bGwsInJvbGVfaWQiOm51bGwsImxvZ2luX3RpbWUiOjE2MDIxNDQzOTF9fQ.UAY234q7QZIpqC3gfWxrRP19B0KYbF-TV4UTE50Umwc"; userId=26'
			},
			success: (res) => {
				
				console.log('res')
				console.log(res)
				
				uni.setStorageSync("sessionJWT", res.header["Set-Cookie"])
				// this.$store.state.home.cookieJwt = res.header["Set-Cookie"]
				
				if (res.status) {
					const _success = res.data;
					if (_success) {
						resolve(res.data)
						
					} else {
						reject(res.msg)
						const error_code = res.status;
						const _message = res.msg;
						this._show_error(error_code, _message)
					}
				} else {
					resolve(res.data)
				}
			},
			fail: (err) => {
				reject()
				this._show_error(1)
			}
		})
	}

	_show_error(error_code, _message) {
		uni.showToast({
			title: `${_message}`,
			icon: 'none',
			duration: 2000
		})
	}
}

export {
	HTTP
}
