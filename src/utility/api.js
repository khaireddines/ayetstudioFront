import axios from 'axios';
import { getItem } from "./localStorageControl";

export default axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-type': 'application/json',
    'X-Auth-Key': 'zxMNGo9TEK3Vb9pSRGW2FDuXxs0Md8',
    authorization: getItem('Auth') && `Bearer ${getItem('Auth').access_token}`,
  },
});
