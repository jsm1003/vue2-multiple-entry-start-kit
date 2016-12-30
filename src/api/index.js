import axios from 'axios'
import store from '../store'

const defaults = {
    baseURL: 'http://localhost:3000/api',
    timeout: 3000,
    withCredentials: true,
}

Object.assign(axios.defaults, defaults)

export default {
    get (url, params={}) {
        return axios({
            method: 'get',
            url: url,
            params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(err =>{
            console.log(err)
        })
    },
    post (url, data = {}) {
        return axios({
            method: 'post',
            url: url,
            data: JSON.stringify(data),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            }
        })
    }
}
