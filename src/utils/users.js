import axios from "axios"
const instance = axios.create({
    baseURL: process.env.API_USERS,
    responseType: 'json'
})

// axios.interceptors.request.use((config) => {
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// instance.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     return Promise.reject(error.message);
// });

export default instance