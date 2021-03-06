import {
    GET_ALL_FUNDS_PENDING,
    GET_ALL_FUNDS,
    GET_ALL_FUNDS_FAILED,
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
const getAllFunds = (options = {}) => {
    const url = getUrl(options);

    return function(dispatch) {
        dispatch(
            requestAllFunds(options)
        );
        callApi(url, REQUESTS.GET, HEADERS).then((response) => {
            
            dispatch(
                receivedAllFunds(response)
            );
        }).catch(error => dispatch(requestAllFundsFailed(error.toString())));
    };
};

export default getAllFunds;


const requestAllFunds = (options) => {
    return {
        type: GET_ALL_FUNDS_PENDING,
        payload: {
            options
        }
    };
};


const receivedAllFunds = (response) => {
    return {
        type: GET_ALL_FUNDS,
        payload: {
            response
        }
    };
};


const requestAllFundsFailed = (error) => {
    return {
        type: GET_ALL_FUNDS_FAILED,
        error
    };
};
