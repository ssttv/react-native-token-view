import axios from 'axios';
import { apiBas } from './../Utils/Constants';
import {
  FETCHING_TOKEN_DATA,
  FETCHING_TOKEN_DATA_SUCCESS,
  FETCHING_TOKEN_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchTokenData() {
  return dispatch => {

    dispatch({ type: FETCHING_TOKEN_DATA })

    return axios.get('${apiBaseURL}/v1/ticker/?limit=10')
    .then(res => {
      dispatch({ type: FETCHING_TOKEN_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_TOKEN_DATA_FAIL, payload: err.data })
    });
  }
}
