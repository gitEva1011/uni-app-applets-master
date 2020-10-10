let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'http://test.ppcms.haierzhongyou.com' // qe环境 http://test.ppcms.haierzhongyou.com
} else {
    BASE_URL = 'https://ppcms.haierzhongyou.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx57a24e292739f900',
	appKey: 'cb249988c79a87bfe382ed8ce10cdb83'
}

export { config }