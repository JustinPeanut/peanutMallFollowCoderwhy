import Axios from "axios";


export function request(config){
  // 创建axios实例，设置baseConfig
  const axiosInstance = Axios.create({
    // baseURL: "http://192.168.43.127:3000",
    baseURL: "http://localhost:3000",
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
