import axios from 'axios';
const callApi = async (url, method, headers, data) => {
    const HEADERS = {
        ...headers
    };
    console.log('url lolololl ',url);
    console.log('data inside api is  ',data);
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
        console.log("oooooooo",err.toString());
        return Promise.reject(err && err.response ? err.response.data : err.toString());
    });
};

export default callApi;
