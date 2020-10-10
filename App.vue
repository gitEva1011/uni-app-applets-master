<script>
	import {
		config
	} from './config.js'
	import {
		AppModel
	} from './models/app.js'
	const appModel = new AppModel()
	// const login = appModel.login

	export default {
		data() {
			return {
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('on show');
			this.getLogin()
			
		},
		methods: {
			getLogin() {
				uni.login({
					success: function(res) {
						if (res.code) {
							const params = {
								code: res.code
							}
							
								appModel.login(params)
								.then(response => {
									
									console.log(3)
									console.log(response)
									// this.$store.dispatch('setUserInfo', response.data)
									// uni.setStorageSync('JWT', '"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDI3Nzc5OTIsImlhdCI6MTYwMjE3MzE5MiwiaXNzIjoicG9ueSIsImRhdGEiOnsiaWQiOjI2LCJvcmdhbml6YXRpb25faWQiOiIxIiwicm9sZV9pZCI6MCwibG9naW5fdGltZSI6MTYwMjE0NDM5Mn19.unPGRDzYuxXDkdfYuKO1bRPPQmjUrGmH5biNOxsy9LM"')
   									uni.setStorageSync('session', response.data.token)
									// uni.login({
									// 	success(response) {
									// uni.setStorageSync('wxCode', res.code);
									uni.setStorageSync('userId', response.data.id);
									uni.setStorageSync('userinfo', {mobile:'18866418301','password':'1234567'});
									// this.session = response.data.token
									 // uni.removeStorageSync('switchOrg');
									// 	}
									// })
									// appModel.switchOrg(params)
									
								})
								.catch(errors => {
									console.log(errors)
								});
						} else {
							console.log('获取用户登录态失败！' + res.errMsg);
						}
					},
					fail: function() {
						uni.showToast({
							title: '微信登录失败',
							icon: 'none'
						})
					}
				});
			},
			
			
				
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
