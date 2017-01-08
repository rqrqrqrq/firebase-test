import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

const configureStore = (history) => createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  ))
)

export default configureStore;
