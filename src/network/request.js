import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000/app01/api/',
    // baseURL: 'http://49.233.210.5:9000/app01/api/',
    baseURL: 'http://121.199.4.130:9000/app01/api/',
    timeout: 10000,
  });
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, err => {
    console.log(err);
  });
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  });
  return instance(config)
}