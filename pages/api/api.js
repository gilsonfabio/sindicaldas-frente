import axios from 'axios';

const api = axios.create({baseURL: 'https://innvento2120.c37.integrator.host'});
//const api = axios.create({baseURL: 'http://localhost:3333' });

export default api;