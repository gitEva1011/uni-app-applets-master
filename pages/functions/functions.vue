<template>
	<view class="fun-container">
		<section class="main">
			<view class="top-cnt"></view>
			<view class="btm-cnt">
				<view class="view-item-container" v-for="(item, index) in cellDataArray" :key="index" @tap="jumpToLoveRecord(item)">
					<text :class="item.img"></text>
					<text class="text-item-title">{{item.title}}</text>
				</view>
				<view class="view-item-container logout-cell">
					<text :class="logOutCell.img"></text>
					<button class="text-item-title shareBtn" type="default" open-type="share">{{logOutCell.title}}</button>
				</view>
			</view>
		</section>

		<neil-modal :title="'表单'" :auto-close="false" :show="showForm" :confirmColor="'#F73657'"
		 :showCancel="false" :showConfirm="false" @cancel="bindBtn('showForm')">
			<view class="logout-modal-content">
				<forms :on-ok="formSubmit"></forms>
			</view>
		</neil-modal>
		<neil-modal :auto-close="false" :show="logout" :confirmColor="'#F73657'" @cancel="bindBtn('logout')"
		 @confirm="bindBtn"
		 :confirmText="'确认'" :cancelText="'取消'">
			<view class="logout-modal-content">
				<view class="logout-title">是否确定</view>
			</view>
		</neil-modal>
	</view>
</template>

<script>
	import neilModal from '@/components/neil-modal/neil-modal.vue'
	import forms from '@/components/form/form.vue'

	export default {
		components: {
			neilModal,forms
		},
		data() {
			return {
				cellDataArray: [
					{
						img: 'icon-font icon-redeem_icon',
						title: '路由跳转',
						type: 1,
						url: "love_record/love_record"
					},
					{
						img: 'icon-font icon-redeem_icon',
						title: '表单',
						type: 2,
						url: "love_record/love_record"
					},
					{
						img: 'icon-font icon-redeem_icon',
						title: '弹框',
						type: 3,
						url: "love_record/love_record"
					}
				],
				logOutCell: {
					img: 'icon-font icon-redeem_icon',
					title: '分享',
					type: 4
				},
				idolName: "",
				logout: false,
				showForm: false
			}
		},
		computed: {
		},
		onShow() {
		},
		onShareAppMessage() {
		    return {
		    	title: `hello world`,
		    	path: `/pages/mine/index`,
		    	imageUrl: require('@/static/images/index/swiper_01.jpeg')
		    }
		},
		methods: {
			formSubmit(val) {
				console.log('val')
				console.log(val)
			},
			logoutFansTeam() {
				this.idolName = '';
				this.logout = true;
			},
			onGetAuthData() {
				//获取授权成功后的数据
				console.log(3333)
			},
			//爱心记录
			jumpToLoveRecord(item) {
				switch(item.type) {
					case 1:
						uni.navigateTo({
							url: '../records/records'
						});
						break;
					case 2:
						this.showForm = true;
						break;
					case 3:
						this.idolName = '';
						this.logout = true;
						break;
				}
			},
			bindBtn(type) {
				switch(type) {
					case 'showForm':
						this.showForm = false;
						break;
					case 'logout':
						this.logout = false;
						break;
					case 3:
						this.idolName = '';
						this.logout = true;
						break;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		.fun-container {
			height: 100%;
			background: #F7F7F7;
			>.main {
	
				.btm-cnt {
					margin-top: 24upx;
					background: #fff;
					padding: 0 32upx;
					>view {
						display: flex;
						align-items: center;
						height: 120upx;
						border-bottom: 1px solid #F7F7F7;
						font-family: PingFangSC-Regular;
						font-size: 32upx;
						color: #212121;
						letter-spacing: 0;
	
						>image {
							width: 40upx;
							height: 40upx;
							margin-right: 30upx;
						}
					}
					.shareBtn{margin-left: 0;background-color: #fff;
						&::after{border:0;}
					}
				}
			}
			.text-item-title {
				margin-left: 35upx;
				font-family: PingFangSC-Regular;
				font-size: 32upx;
				color: #212121;
			}
			.logout-modal-content {
				width: 464upx;
				padding: 30upx 38upx 30upx;
				border-bottom: 1px solid #e5e5e5;
				display: flex;
				flex-direction: column;
				align-items: center;
			
				.logout-title {
					font-family: PingFangSC-Regular;
					font-size: 36upx;
					color: #000000;
					text-align: center;
					line-height: 50upx;
				}
			}
		}
	}
</style>
