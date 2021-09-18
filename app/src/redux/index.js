import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import userReducer from './modules/user';
import settings from './modules/settings'
import authenticationReducer from './modules/authentication';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  form: formReducer,
  settings: settings
});

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
