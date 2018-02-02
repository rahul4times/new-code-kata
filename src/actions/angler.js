import axios from 'axios';

export const GET_ANGLER_PENDING = 'GET_ANGLER_PENDING'
export const GET_ANGLER_SUCCESS = 'GET_ANGLER_SUCCESS'

export const getAngler = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ANGLER_PENDING})
    let angler = await axios.get('https://868r1t0.restletmocks.net/catfish')
    dispatch({
      type: GET_ANGLER_SUCCESS,
      payload: angler
    });
  }
}
