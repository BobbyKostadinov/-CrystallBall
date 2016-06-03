import { combineReducers } from 'redux';
import QueryFormReducer from './query_form';

const mainReducer = combineReducers({
  queryForm: QueryFormReducer
});

export default mainReducer;
