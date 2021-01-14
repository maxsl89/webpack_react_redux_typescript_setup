import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/AppReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const rootReducer = combineReducers({
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
