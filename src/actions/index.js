import axios from "axios";
import * as types from "./types";

export const fetchUser = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/api/current_user");
      dispatch({ type: types.FETCH_USER, payload: response.data });
    } catch (err) {
      dispatch({ type: types.FETCH_ERROR, payload: err.response.data });
    }
  };
};

export const fetchClients = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/api/v1/allClients");
      dispatch({ type: types.FETCH_CLIENTS, payload: response.data });
    } catch (err) {
      dispatch({ type: types.FETCH_CLIENTS_ERROR, payload: err });
    }
  };
};

export const fetchClientDetails = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/v1/singleClient?clientId=${id}`);
      dispatch({ type: types.FETCH_CLIENT_DETAILS, payload: response.data });
    } catch (err) {
      dispatch({ type: types.FETCH_CLIENT_ERROR, payload: err });
    }
  };
};

export const fetchQuickbooksData = (realmId, start_date, end_date) => {
  const apiUrl = `/api/v1/retrieve_company_info?realmId=${realmId}&start_date=${start_date}&end_date=${end_date}`;
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({ type: types.FETCH_QUICKBOOKS_DATA, payload: response.data });
    } catch (err) {
      dispatch({ type: types.FETCH_QUICKBOOKS_FAILED, payload: err });
    }
  };
};
