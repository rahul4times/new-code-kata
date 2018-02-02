import {
  GET_ANGLER_PENDING,
  GET_ANGLER_SUCCESS
} from '../actions/angler';

export default (state=[], action) => {
  switch(action.type){
    case GET_ANGLER_PENDING:
      return state;

      /*
        Reducers are for data manipulation
      */
    case GET_ANGLER_SUCCESS:
      return [...action.payload.data]
    default:
        return state;
  }
}
