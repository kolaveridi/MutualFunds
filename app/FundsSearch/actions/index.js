import {
    GET_ALL_FUNDS_PENDING_ON_SEARCH,
    GET_ALL_FUNDS_FAILED_ON_SEARCH,
    GET_ALL_FUNDS_ON_SEARCH,
} from '../actionTypes';
import {
    REQUESTS,
    HEADERS
}
from '../../../config';
const getUrl = (options) => {
    let url ='https://api.piggy.co.in/v2/mf/search/';
    return url;

};
import callApi from '../../../callApi';
const getAllFundsOnSearch = (options = {},data) => {
    const url = getUrl(options);
    console.log('url',url);
    console.log('data inside actio is ',data);
    return function(dispatch) {
        dispatch(
            requestAllFundsOnSearch(options,data)
        );
        callApi(url, REQUESTS.POST, HEADERS,data).then((response) => {
            console.log('response isnide post',response);
            dispatch(
                receivedAllFundsOnSearch(response)
            );
        }).catch(error => dispatch(requestAllFundsFailedOnSearch(error.toString())));
    };
};

export default getAllFundsOnSearch;


const requestAllFundsOnSearch = (options) => {
    return {
        type: GET_ALL_FUNDS_PENDING_ON_SEARCH,
        payload: {
            options
        }
    };
};


const receivedAllFundsOnSearch = (response) => {
    return {
        type: GET_ALL_FUNDS_ON_SEARCH,
        payload: {
            response
        }
    };
};


const requestAllFundsFailedOnSearch = (error) => {
    return {
        type: GET_ALL_FUNDS_FAILED_ON_SEARCH,
        error
    };
};
