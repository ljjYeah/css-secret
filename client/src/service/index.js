import axios from './middleware'

// 获取列表信息
export const getList = () => (
	axios.get('/list')
);

// 获取示例详情
export const getInfoById = (params) => (
	axios.get('/info', {params})
);
