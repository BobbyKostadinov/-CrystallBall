import { combineReducers } from 'redux';
import FormSubmitReducer from './form_submit';

const mainReducer = combineReducers({
  result: FormSubmitReducer
});

export default mainReducer;
