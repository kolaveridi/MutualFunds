

import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import FundsReducer from './app/Funds/reducers';
const reducer = combineReducers({
    funds:FundsReducer
});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            // promise,
            thunk,
            logger
        )
    )
);

export default store;
