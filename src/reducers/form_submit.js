import { FORM_SUBMIT } from './../actions/form_submit'

export default function FormSubmit(state = null, action) {
  if (action.type === FORM_SUBMIT) {
    return action.payload.data
  }

  return state
}
