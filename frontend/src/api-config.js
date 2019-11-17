
import axios from 'axios';

let backendHost;
const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8000';
}

export const API_ROOT = `${backendHost}/`;

axios.defaults.baseURL = API_ROOT;