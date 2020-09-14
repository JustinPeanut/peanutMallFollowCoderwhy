import Axios from "axios";


export function request(config){
  // 创建axios实例，设置baseConfig
  const axiosInstance = Axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  // 请求拦截器
  axiosInstance.interceptors.request.use(config => {
    return config;
  });
  // 响应拦截器
  axiosInstance.interceptors.response.use(result => {
    return result.data;
  })
  return axiosInstance(config);
}
