import { createStore } from 'redux';
import combinedReducer from './reducers/index';

export function configureStore(initialState) {
  return initialState
    ? createStore(
      combinedReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    : createStore(
      combinedReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}

export default configureStore();
