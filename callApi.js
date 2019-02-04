import axios from 'axios';
const callApi = async (url, method, headers, data) => {
    const HEADERS = {
        ...headers
    };
    console.info('request::::::',url, method, HEADERS, data);
    return axios({
        method,
        url,
        headers: HEADERS,
        data
    }).then((response) => {
        console.info('response.data',response.data);
        return response.data;
    }).catch((err) => {
        console.log(err && err.response ? err.response.data : err.toString());
        return Promise.reject(err && err.response ? err.response.data : err.toString());
    });
};

export default callApi;
