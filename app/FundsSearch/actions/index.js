import {
    GET_ALL_FUNDS_PENDING_ON_SAERCH,
    GET_ALL_FUNDS_FAILED_ON_SAERCH,
    GET_ALL_FUNDS_FAILED_ON_SAERCH,
} from '../actionTypes';
import {
    REQUESTS,
    HEADERS
}
from '../../../config';
const getUrl = (options) => {
    let url ='https://api.piggy.co.in/v1/mf/?key=118656INF204K01E05';
    return url;

};
import callApi from '../../../callApi';
const getAllFundsOnSearch = (options = {}) => {
    const url = getUrl(options);
    console.log('url',url);
    return function(dispatch) {
        dispatch(
            requestAllFundsOnSearch(options)
        );
        callApi(url, REQUESTS.GET, HEADERS).then((response) => {
            console.log('response',response);
            dispatch(
                receivedAllFundsOnSearch(response)
            );
        }).catch(error => dispatch(requestAllFundsFailedOnSearch(error.toString())));
    };
};

export default getAllFunds;


const requestAllFundsOnSearch = (options) => {
    return {
        type: GET_ALL_FUNDS_PENDING_ON_SAERCH,
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
        type: GET_ALL_FUNDS_FAILED_ON_SAERCH,
        error
    };
};
