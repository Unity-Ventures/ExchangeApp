import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../utils/storage/Storage';



const instance = axios.create({
  baseURL: 'http://192.168.254.149:8080',
  headers: {},
});

instance.interceptors.request.use( async (config)=>{
  try {
    const tokn = await getData("token");
    config.headers.Authorization = `Bearer ${tokn}`;
  } catch (error) {
    console.log("Error retriving token" , error);
  }
  return config;

})

export default instance;



// let cachedToken = null;

// const instance = axios.create({
//     baseURL: 'http://192.168.254.149:8080',
  
//   headers: {
//     Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
//   }
// });

// instance.interceptors.request.use(
//   async config => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       cachedToken = token;
//       config.headers.Authorization = `Bearer ${cachedToken}`;
//     } catch (error) {

//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default instance