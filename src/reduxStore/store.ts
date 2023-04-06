import {applyMiddleware, legacy_createStore} from 'redux';
import rootReducer from './rootReducer';

const thunk = (store: any) => (next: any) => (action: any) => {
  if (typeof action == 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
