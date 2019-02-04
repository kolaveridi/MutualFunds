import{
    GET_ALL_FUNDS,
    GET_ALL_FUNDS_FAILED,
    GET_ALL_FUNDS_PENDING
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

export default function FundsReducer(state=INITIAL_STATE,action={}){
    console.log('Inside reducer',state);
    console.log('actionTypes',action);
  switch(action.type){

      case GET_ALL_FUNDS_FAILED:{
        return{
          ...state,
           funds:{
            ...state.funds,
            failed:true,
            pending:false,

          }
        };
      }
      case GET_ALL_FUNDS_PENDING:
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
      case GET_ALL_FUNDS:
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
