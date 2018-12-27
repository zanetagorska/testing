import { combineReducers } from 'redux';
import collections from './redux/collections';
import auth from './redux/auth';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  collections,
  auth,
  form: formReducer,
});
