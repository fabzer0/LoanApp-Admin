import { combineReducers } from "redux";
import authReducer from "./authReducer";
import clientsReducer from "./clientsReducer";
import clientReducer from "./clientReducer";
import quickbooksReducer from "./quickbooksReducer";

export default combineReducers({
  auth: authReducer,
  clients: clientsReducer,
  client: clientReducer,
  quickbooks: quickbooksReducer
});
