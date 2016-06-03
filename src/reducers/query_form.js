import formSubmit, { FORM_SUBMIT } from './../actions/form_submit'

const initialState = {
  activity: "",
  activityDate: new Date().getTime()
}

export default function queryForm(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
console.log(action.payload);
  if (action.type === FORM_SUBMIT) {
    return action.payload
  }

  return state
}
