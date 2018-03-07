import axios from "axios";

import { FETCH_USERS } from '../constants/user';

export function fetchUsers () {
  const request = axios.get(`./db.json`, { headers: { 'Content-Type': 'application/json' } });

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: FETCH_USERS, payload: eval(response.data) })
    }).catch((error) => {
      console.log('Error comming ', error);
    });
  };
}