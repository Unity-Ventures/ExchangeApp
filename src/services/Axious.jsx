import axios from 'axios'
import { getData } from '../utils/storage/Storage';



const instance = axios.create({
  baseURL: 'http://192.168.254.150:8080',
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