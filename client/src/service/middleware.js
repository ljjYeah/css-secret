import axios from 'axios'

const baseUrl = process.env[`VUE_APP_${process.env.NODE_ENV}Api`];
const instance = axios.create({
	baseURL: baseUrl,
	timeout: 60000,
	validateStatus(status) {
		return status < 500
	}
});

// 响应拦截器
instance.interceptors.response.use(
	response => {
		const { code } = response.data;
		if (code === 0) {
			return Promise.resolve(response.data)
		}
		return Promise.reject()
	},
	err => {
		return Promise.reject(err)
	}
);

export default instance
