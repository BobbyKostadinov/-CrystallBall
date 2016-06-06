import axios from 'axios';

const API_KEY = 'b1e4b3beb8b0655440400d27c922920f';


export const FORM_SUBMIT = 'FORM_SUBMIT';
export default function formSubmit({ location }) {
  return {
    type: FORM_SUBMIT,
    payload: axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location},gb&mode=json&appid=${API_KEY}`)
  }
}
