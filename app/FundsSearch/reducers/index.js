import{
    GET_ALL_FUNDS_ON_SEARCH,
    GET_ALL_FUNDS_FAILED_ON_SEARCH,
    GET_ALL_FUNDS_PENDING_ON_SEARCH
}
from '../actionTypes';

const INITIAL_STATE={
    funds:{
    data:[],
    failed:null,
    pending:null,
    isRefresh:false,
    noMore:false,
    skip:0
  }

};

export default function FundsSearchReducer(state=INITIAL_STATE,action={}){
  switch(action.type){

      case GET_ALL_FUNDS_FAILED_ON_SEARCH:{
        return{
          ...state,
           funds:{
            ...state.funds,
            failed:true,
            pending:false,

          }
        };
      }
      case GET_ALL_FUNDS_PENDING_ON_SEARCH:
      {
        let {options}=action.payload;

        return{
          ...state,
           funds:{
            ...state.funds,
            data:[],
            failed:null,
            pending:true,
          }
        };
      }
      case GET_ALL_FUNDS_ON_SEARCH:
      {
         let data;
         data=action.payload.response.data;

        return{
          ...state,
          funds:{
            ...state.funds,
            data,
            pending:false,
          }
        }
      }


    default:
        return state;

  }
}
