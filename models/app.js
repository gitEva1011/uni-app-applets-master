import { HTTP } from '../utils/http.js'

class AppModel extends HTTP {
	login(params) {
        return this.request({
            url: `/api/login`,
			method: 'POST',
			data: {mobile: '18866418301',password: '1234567',}
        })
    }
	// login: (params) => {
	//     return this.request({
 //            url: `/api/login`,
	// 		method: 'POST',
	// 		data: {mobile: '18866418301',password: '1234567',}
 //        })
	// },
	switchOrg(params) {
	    return this.request({
	        url: `/api/switch`,
			method: 'GET',
			data: {organization_id: 1}
	    })
	}
}

export { AppModel }

// export default {
//     wxMaLogin: (data) => {
//         return request.post('portal/member/wxMaLogin', data)
//     },
//     info: (data) => {
//         return request.post('portal/member/info', data)
//     }
// }