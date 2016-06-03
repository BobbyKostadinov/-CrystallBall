export const FORM_SUBMIT = 'FORM_SUBMIT';
export default function formSubmit(activity, activityDate) {
  return {
    type: FORM_SUBMIT,
    payload: {
      activity,
      activityDate
    }
  }
}
