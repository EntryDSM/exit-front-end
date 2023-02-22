import axios from 'axios';

export const customAxios = axios.create({
  // TODO : env로 바꾸기
  baseURL: 'http://114.108.176.85:8000',
  timeout: 1000,
  // headers: {
  //     Authorization: `Bearer ${Cookie.getCookie("token")}`,
  // },
});
