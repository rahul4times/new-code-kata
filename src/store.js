import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default (initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
}
