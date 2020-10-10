import { HTTP } from '../utils/http.js'

class MineModel extends HTTP {
	
	// 爱心记录查询
	loveList(params) {
	    return this.request({
	        url: `/api/resource/list`,
			method: 'GET',
			data: {
				name: params.name,
				page: params.page,
				size: params.size,
				except_id_list: params.except_id_list
				
			}
	    })
	}
	
	// 兑换记录查询
	exchangeRecordList(params) {
	    return this.request({
	        url: `/exchange_record_list`,
			method: 'POST',
			data: {
				...params
			}
	    })
	}
}

export { MineModel }