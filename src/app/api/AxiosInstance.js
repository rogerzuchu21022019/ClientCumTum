// @ts-nocheck
import AsyncStorage from '@react-native-async-storage/async-storage';
// import jwtDecode from 'jwt-decode';

import Axios from 'axios';
import {LOG} from '../../../logger.config';
import {BaseUrl} from './BaseUrl';
import {
  getToken,
  saveToken,
} from '../utils/AsyncStorage';
const log = LOG.extend(`AXIOS_INSTANCE`);
export const AxiosInstance = () => {
  const axios = Axios.create({
    // baseURL: BaseUrl.Main,
    baseURL: BaseUrl.Third,
    // baseURL: BaseUrl.Four,
  });

  // const provideRefreshToken = async (refreshToken) => {
  //   const data = {
  //     refreshToken,
  //   };
  //   const res = await axios.post('/auth-refresh', data);
  //   return res;
  // };

  // axios.interceptors.request.use(
  //   async (config) => {
  //     const token = await getToken(`token`);
  //     // console.log('🚀 ~ file: AxiosInstance.js ~ line 29 ~ token', token);
  //     const refToken = await getToken('refToken');
  //     // console.log('🚀 ~ file: AxiosInstance.js ~ line 30 ~ refToken', refToken);
  //     if (token) {
  //       config.headers['Accept'] = 'application/json multipart/form-data';
  //       // config.headers['Content-Type'] = 'multipart/form-data';
  //       config.headers['Access-Control-Allow-Origin'] = '*';
  //       config.headers['Access-Control-Allow-Headers'] =
  //         'Authorization auth_access_token auth_refresh_token';
  //       config.headers.auth_access_token = `Bearer token`;
  //       config.headers.auth_refresh_token = `refToken`;
  //       config.headers['Access-Control-Allow-Methods'] =
  //         'GET, POST, OPTIONS, PUT, PATCH, DELETE';
  //     }
  //     console.log(`bearer`, config.headers);
  //     return config;
  //   },
  //   (error) => {
  //     Promise.reject(error);
  //   },
  //   null,
  //   {synchronous: true},
  // );

  // axios.interceptors.response.use(
  //   async (response) => {
  //     // block to handle success case

  //     const token = await getToken('token');
  //     const refToken = await getToken('refToken');

  //     // const decodeToken = jwtDecode(token);
  //     // const currentTime = new Date().getTime();
  //     // if (decodeToken.exp < currentTime) {
  //     //   try {
  //     //     const resNew = await provideRefreshToken(refToken);
  //     //     console.log('🚀 ~ file: AxiosInstance.js ~ line 46 ~ res', res);
  //     //     const {accessToken,refreshToken} = resNew.data.data;
  //     //     config.headers.auth_access_token = `Bearer accessToken`;
  //     //     config.headers.auth_refresh_token = `refreshToken`;
  //     //   } catch (error) {
  //     //     console.log(`error handle refresh token`, error);
  //     //   }
  //     // }
  //     log.error(
  //       `response.data.message  === 'Token is not valid'`,
  //       response.data.message,
  //     );

  //     if (response.data.message === 'Token is not valid') {
  //       try {
  //         const resNew = await provideRefreshToken(refToken);
  //         const {accessToken, refreshToken} = resNew.data.data;
  //         const config = response.config;
  //         config.headers.auth_access_token = `Bearer accessToken`;
  //         config.headers.auth_refresh_token = `refreshToken`;
  //         await saveToken('token', accessToken);
  //         await saveToken('refToken', refreshToken);
  //         console.log(
  //           '🚀 ~ file: AxiosInstance.js:89 ~ newRefreshToken',
  //           refreshToken,
  //         );
  //         console.log(
  //           '🚀 ~ file: AxiosInstance.js:89 ~ newAccessToken',
  //           accessToken,
  //         );
  //         return axios(config);
  //       } catch (error) {
  //         console.log(`error handle refresh token`, error);
  //       }
  //     }

  //     return response;
  //   },
  //   (error) => {
  //     log.error(
  //       '🚀 ~ file: AxiosInstance.js:85 ~ AxiosInstance ~ error',
  //       error,
  //     );
  //     // block to handle error case

  //     return Promise.reject(error);
  //   },
  // );
  return axios;
};
