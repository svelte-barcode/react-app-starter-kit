import axios from "axios";

import { FETCH_USERS } from '../constants/user';

export function fetchUsers () {
  const request = axios.get(`./db.json`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: FETCH_USERS, payload: response.data })
    }).catch((error) => {
      console.log('Error comming ', error);
    });
  };
}