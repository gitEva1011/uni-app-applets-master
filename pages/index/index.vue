<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<Swiper
			class="swiper-container"
			:bannerList="bannerList"
			:indicatorDots="indicatorDots">
		</Swiper>
		<section class="records-container">
			<view class="tabBox">
				<yx-tab :tabData="tabData.tabName" @seletedTab="changeTab" :txtActiveColor="'#F84C69'" :txtColor="'#212121'"
				 :bgColor="'#FFFFFF'" :underLineColor="'#F84C69'"></yx-tab>
			</view>
			<view class="contentBox">
				<ul v-if="dataArray && dataArray.length > 0">
					<li v-for="(item, index) in dataArray" :key="index" @tap="jumpToRouter(item.url)">
						<p>
							<text>{{item.formatStarName}}</text>
							<text v-if="selectedTab === 0">+{{item.loveCount}}</text>
							<text v-else>-{{item.loveCount}}</text>
						</p>
						<text>{{item.createTime}}</text>
					</li>
				</ul>
				<section v-else>
					<image lazy-load=true :src="noDataUrl"></image>
					<p>暂无记录</p>
				</section>
			</view>
			<view class="moreBox" v-if="showLoadMore">{{loadMoreText}}</view>
		</section>
	</view>
</template>

<script>
	
	import Swiper from '@/components/common/swiper.vue'
	import formIdMixin from '@/utils/form-id-mixins.js'
	
	import YxTab from '@/components/common/yxTab.vue'
	import {
		AppModel
	} from '@/models/app.js'
	const appModel = new AppModel()
	import { MineModel } from '@/models/mine.js'
	const mineModel = new MineModel()
	export default {
		components: {
			Swiper, YxTab
		},
		mixins: [formIdMixin],
		data() {
			return {
				title: 'Hello',
				bannerList: [
					{
						id: 1,
						imageUrl: require('@/static/images/index/swiper_01.jpeg'),
						forwardUrl: 'https://www.baidu.com'
					},
					{
						id: 2,
						imageUrl: require('@/static/images/index/swiper_02.jpeg'),
						forwardUrl: 'https://www.baidu.com'
					},
					{
						id: 3,
						imageUrl: require('@/static/images/index/swiper_03.jpeg'),
						forwardUrl: 'https://www.baidu.com'
					}
				],
				indicatorDots: true,
				noDataUrl: require('@/static/images/common/not-result.png'),
				dataArray: [],
				pagination: {
					page: 0,
					size: 20,
					totalNumber: 0
				},
				loadMoreText: "加载中...",
				showLoadMore: false,
				isRefresh: true,
				selectedTab: 0,
				tabData: {
					isActive: 0,
					tabName: ["资源列表", "课程列表"]
				},
				cookieJWT: ''
			}
		},
		filters: {
			formatStarName(val) {
				switch (val) {
					case 2:
						return '任务'
					case 3:
						return '抽奖'
					case 7:
						return '赠送'
					case 9:
						return '奖励'
					case 10:
						return '补偿'
				}
			}
		},
		onLoad: function (options) {
			
			appModel.switchOrg()
			.then(res => {
				uni.setStorageSync('switchOrg',true)
			})
			this.getInitData(0)
			
		},
		onShow(){
			this.cookieJWT = uni.getStorageSync("sessionJWT")
		},
		onUnload() {
			this.dataArray = []
			this.loadMoreText = "加载更多"
			this.showLoadMore = false
		},
		//页面上拉触底事件的处理函数
		onReachBottom() {
			if (!this.isRefresh) {
				this.loadMoreText = "~ 没有更多数据了 ~"
				return
			}
			this.loadMoreText = "加载中..."
			this.showLoadMore = true
			this.pagination.page ++
			this.getInitData(this.pagination.page)
		},
		//页面下拉初始化刷新
		onPullDownRefresh() {
			this.dataArray = []
			this.pagination.page = 0
			this.loadMoreText = ""
			this.getInitData(this.pagination.page)
		},
		methods: {
			// 路由跳转
			jumpToRouter(url) {
				uni.navigateTo({
					url: url
				});
			},
			getInitData(page) {
				uni.showLoading({
					title: '正在加载...'
				})
				
				mineModel.loveList({
					name: '',
					page: 1,
					size: 10,
					except_id_list: ''
					// currentPage: page,
					// loveType: this.selectedTab + 1,
					// pageSize: this.pagination.size
				})
					.then(res => {
						res = [
							{
								'formatStarName': '项目1',
								'loveCount': 100,
								'createTime': '2020-10-09'
							},
							{
								'formatStarName': '项目2',
								'loveCount': 100,
								'createTime': '2020-10-09'
							},
							{
								'formatStarName': '项目3',
								'loveCount': 100,
								'createTime': '2020-10-09'
							}
						]
						this.dataArray = this.dataArray.concat(res)
						
						if (res.length < this.pagination.size) {
							this.isRefresh = false
						} else {
							this.isRefresh = true
						}
						uni.hideLoading()
						uni.stopPullDownRefresh()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
						uni.stopPullDownRefresh()
					})
				
			},
			changeTab(index) {
				this.showLoadMore = false
				this.dataArray = []
				this.selectedTab = index;
				this.getInitData(0);
				console.log(this.selectedTab)
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 50rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.swiper-container {
		width: 100%;height: 260rpx;
	}
	// records
	.records-container {
		position: relative;
		>.tabBox {
			position: sticky;
			top: 0;
			left: 0;
			width: 750upx;
			z-index: 1;
		
			/deep/ .yx-tab-wrap {
				width: 390upx;
				padding: 0 180upx!important;
			}
		
			border-bottom: 1upx solid #f0f0f0;
		}
		>.contentBox {
			padding: 94upx 30upx 0 30upx;
			>ul {
				>li {
					height: 155upx;
					border-bottom: 1upx solid #E5E5E5;
					display: flex;
					flex-direction: column;
					justify-content: center;
					>p {
						display: flex;
						justify-content: space-between;
						font-size: 36upx;
						color: #212121;
						line-height: 50upx;
						margin-bottom: 8upx;
					}
					>text {
						font-size: 24upx;
						color: #9E9E9E;
						line-height: 33upx;
					}
				}
			}
			>section {
				text-align: center;
				// padding-top: 300upx;
				padding-bottom: 300rpx;
				>image {
					height: 300upx;
					width: 300upx;
				}
				>p {
					font-size: 28upx;
					color: #757575;
					line-height: 40upx;
					margin-top: 6upx;
				}
			}
		}
		>.moreBox {
			height: 120upx;
			line-height: 120upx;
			text-align: center;
		}
	}
</style>
