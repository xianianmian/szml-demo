import axios from 'axios';
const baseURL= 'http://localhost:9095'

const api = axios.create({
  baseURL: baseURL, // 设置 API 的基本 URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加请求拦截器，在请求发送之前设置请求头
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('qcby-token '); // 从本地存储中获取 token
  if (token) {
    config.headers['qcby-token'] = token; // 将 token 添加到请求头的'qcby-token'字段中
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
